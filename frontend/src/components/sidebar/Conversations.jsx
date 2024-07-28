import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='py-2 flex flex-col-reverse overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === 0} // Adjusted for reversed order
        />
      ))}
      {loading && <span className='loading loading-spinner mx-auto'></span>}
    </div>
  );
};

export default Conversations;
