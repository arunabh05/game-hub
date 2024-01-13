import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  BsBullseye,
  BsHandThumbsUp,
  BsFillEmojiNeutralFill,
} from "react-icons/bs";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: string]: IconType } = {
    3: BsFillEmojiNeutralFill,
    4: BsHandThumbsUp,
    5: BsBullseye,
  };

  return (
    <Icon as={emojiMap[rating]} color={"gray.500"} key={rating} marginTop={2} />
  );
};

export default Emoji;
