import Link from "next/link";
import {
  HStack,
  Icon,
  Skeleton,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useIsMounted } from "@/hooks/useIsMounted";

export default function Footer() {
  const { isMounted } = useIsMounted();
  return (
    <>
      <VStack
        width={"100%"}
        borderTop={"1px"}
        borderColor={"#edf1f5"}
        paddingY={2}
        as="footer"
      >      </VStack>
    </>
  );
}
