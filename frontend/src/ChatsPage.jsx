import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="7d6f8cf2-7501-489b-8256-cdd24fe1f6b0"
        // eslint-disable-next-line react/prop-types
        username={props.user.username}
        // eslint-disable-next-line react/prop-types
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
