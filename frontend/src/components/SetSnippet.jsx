import axios from "axios";
import React, { useState } from "react";
import { Alert, Card } from "react-bootstrap";

function SetSnippet({ snip, handleEdit }) {
  const [show, setShow] = useState(false);

  const deleteSnippet = async () => {
    const res = await axios.get(`http://localhost:3020/snips/${snip.title}`, {
      withCredentials: true,
    });
    const DeleteId = res.data.snip;
    await axios.delete(`http://localhost:3020/snips/${DeleteId._id}`, {
      withCredentials: true,
    });
    setShow(true);
    setTimeout(() => {
      window.location.reload();
      setShow(false);
    }, 1000);
  };

  return (
    <>
      {show && (
        <Alert variant="success" className="mt-3 success">
          Deleted successfully!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="green"
            class="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
          </svg>
        </Alert>
      )}
      <Card className="snippet mt-5" bg="dark" border="secondary">
        <Card.Header
          style={{
            backgroundColor: "#252a2e",
            borderColor: "#454d55",
          }}
          as="h5"
        >
          <Card.Text
            style={{
              color: "white",
              fontStyle: "bold",
              fontFamily: "Source Code Pro",
            }}
          >
            &lt;/&gt;
          </Card.Text>
        </Card.Header>

        <Card.Body>
          <div className="snippet-icons">

            <svg
              onClick={() => deleteSnippet()}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="white"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
            </svg>
          </div>
          <div className="snippet-overtitle">Title</div>
          <Card.Text className="snippet-title">{snip.title}</Card.Text>
          <div className="snippet-overtitle">Description</div>
          <Card.Text className="snippet-description">
            {snip.description}
          </Card.Text>
          <div className="snippet-overtitle mb-3">Language</div>
          <Card.Text className="snippet-language">
            &lt;{snip.language}&gt;
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SetSnippet;
