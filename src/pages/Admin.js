import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import styles from "./styles.module.css";

const { Configuration, OpenAIApi } = require("openai");

export default function Admin() {
  const [app, setApp] = useState([]);
  const [nom, setNom] = useState([]);
  const [data, setData] = useState({ appMedian: 0, nomMedian: 0 });
  const [message, setMessage] = useState([]);
  const [queries, setQueries] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [ai, setAi] = useState({ textSummary: "", id: "" });
  const [showMessages, setShowMessages] = useState(true);
  const [showSearches, setShowSearches] = useState(true);
  const [showApps, setShowApps] = useState(true);
  const [showNoms, setShowNoms] = useState(true);

  const currentUser = useAuth();
  const navigate = useNavigate();

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const handleTextSummary = async (id, text) => {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `${text}\n\nTl;dr`,
      temperature: 0.7,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    setAi((prev) => ({
      ...prev,
      id: id,
      textSummary: response.data.choices[0].text,
    }));
  };

  const appCollectionRef = collection(db, "applications");
  const nomCollectionRef = collection(db, "nominations");
  const adminCollectionRef = collection(db, "admins");
  const messageCollectionRef = collection(db, "messages");
  const searchCollectionRef = collection(db, "searches");

  const handleDelete = async (id, table) => {
    if (window.confirm("are you sure you want to delete")) {
      const docRef = doc(db, table, id);
      await deleteDoc(docRef);
      window.location.reload();
    }
  };

  useEffect(() => {
    const findMedian = (arr) => {
      arr.sort();
      const mid = Math.floor(arr.length / 2);
      if (arr.length === 0) {
        return 0;
      } else if (arr.length % 2 === 1) {
        return arr[mid];
      } else {
        return (arr[mid] + arr[mid - 1]) / 2;
      }
    };

    const fetchData = async () => {
      const appDocs = await getDocs(appCollectionRef);
      setApp(appDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      let app_lengths = appDocs.docs.map(
        (doc) => doc.data().info.trim().split(" ").length
      );
      setData((prev) => ({ ...prev, appMedian: findMedian(app_lengths) }));

      const nomDocs = await getDocs(nomCollectionRef);
      setNom(nomDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      let nom_lengths = nomDocs.docs.map(
        (doc) => doc.data().info.trim().split(" ").length
      );
      setData((prev) => ({ ...prev, nomMedian: findMedian(nom_lengths) }));

      const messageDocs = await getDocs(messageCollectionRef);
      setMessage(
        messageDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      const queryDocs = await getDocs(searchCollectionRef);
      setQueries(queryDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const adminDocs = await getDocs(adminCollectionRef);
      setAuthorized(
        adminDocs.docs.filter((doc) => doc.data().email === currentUser.email)
          .length >= 1
      );
    };

    fetchData();
  }, []);

  return authorized ? (
    <div className={styles.container}>
      <div className={styles.row}>
        <div style={{ flex: 1 }}></div>
        <h1>Admin Portal</h1>
        <div style={{ flex: 1 }}></div>
      </div>

      <button style={{ padding: "5px" }} onClick={() => navigate("/")}>
        Go back
      </button>
      <p>Currently signed in as: {currentUser.email}</p>

      {/* <h2>Data Summary</h2>
      <hr />
      <p>Application count: {app.length}</p>
      <p>Application median word count: {data.appMedian}</p>
      <p>Nomination count: {nom.length}</p>
      <p>Nomination median word count: {data.nomMedian}</p> */}

      <h2>Messages</h2>
      <button
        style={{ padding: "5px" }}
        onClick={() => setShowMessages(!showMessages)}
      >
        {showMessages ? "hide" : "show"}
      </button>
      <hr />
      {showMessages
        ? message.map((e) => {
            return (
              <div
                key={e.id}
                style={{
                  borderStyle: "solid",
                  padding: "20px",
                  borderWidth: "0.5px",
                }}
              >
                <button
                  style={{ padding: "5px" }}
                  onClick={() => handleDelete(e.id, "messages")}
                >
                  delete
                </button>
                <p>email: {e.email}</p>
                <p>
                  <b>message:</b>
                </p>
                <button
                  style={{ padding: "5px" }}
                  onClick={() => handleTextSummary(e.id, e.message)}
                >
                  see summary
                </button>
                <p>{e.message}</p>

                <p>{ai.id === e.id ? ai.textSummary : null}</p>
              </div>
            );
          })
        : null}

      <h2>Search Queries</h2>
      <button
        style={{ padding: "5px" }}
        onClick={() => setShowSearches(!showSearches)}
      >
        {showSearches ? "hide" : "show"}
      </button>
      <hr />
      {showSearches
        ? queries.map((e) => {
            return (
              <div
                key={e.id}
                style={{
                  borderStyle: "solid",
                  padding: "20px",
                  borderWidth: "0.5px",
                }}
              >
                <button
                  style={{ padding: "5px" }}
                  onClick={() => handleDelete(e.id, "searches")}
                >
                  delete
                </button>
                <p>
                  <b>Search Query:</b>
                </p>
                <p>{e.query}</p>
              </div>
            );
          })
        : null}

      <h2>Applications</h2>
      <button style={{ padding: "5px" }} onClick={() => setShowApps(!showApps)}>
        {showApps ? "hide" : "show"}
      </button>
      <hr />
      {showApps
        ? app.map((e) => {
            return (
              <div
                key={e.id}
                style={{
                  borderStyle: "solid",
                  padding: "20px",
                  borderWidth: "0.5px",
                }}
              >
                <button
                  style={{ padding: "5px" }}
                  onClick={() => handleDelete(e.id, "applications")}
                >
                  delete
                </button>
                <p>email: {e.email}</p>
                <p>name: {e.name}</p>

                <p>location: {e.location}</p>
                <p>
                  <b>tell us about yourself:</b>
                </p>
                <button
                  style={{ padding: "5px" }}
                  onClick={() => handleTextSummary(e.id, e.info)}
                >
                  see summary
                </button>
                <p>{e.info}</p>

                <p>{ai.id === e.id ? ai.textSummary : null}</p>
              </div>
            );
          })
        : null}
      <h2>Nominations</h2>
      <button style={{ padding: "5px" }} onClick={() => setShowNoms(!showNoms)}>
        {showNoms ? "hide" : "show"}
      </button>
      <hr />
      {showNoms
        ? nom.map((e) => {
            return (
              <div
                key={e.id}
                style={{
                  borderStyle: "solid",
                  padding: "20px",
                  borderWidth: "0.5px",
                }}
              >
                <button
                  style={{ padding: "5px" }}
                  onClick={() => handleDelete(e.id, "nominations")}
                >
                  delete
                </button>
                <p>email: {e.email}</p>
                <p>name: {e.name}</p>
                <p>location: {e.location}</p>
                <p>
                  <b>tell us about yourself:</b>
                </p>
                <button
                  style={{ padding: "5px" }}
                  onClick={() => handleTextSummary(e.id, e.info)}
                >
                  see summary
                </button>
                <p>{e.info}</p>

                <p>{ai.id === e.id ? ai.textSummary : null}</p>
              </div>
            );
          })
        : null}
    </div>
  ) : (
    <div>
      <h1>ACCESS DENIED</h1>
      <p>Contact a TEDxCornell team member if you believe this is a mistake</p>
    </div>
  );
}
