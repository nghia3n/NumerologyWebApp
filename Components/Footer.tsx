import { FC } from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { CustomCard, Icon, Wrap, useColorMode } from "Components";
import { Tooltip } from "@chakra-ui/react";

export const Footer: FC = () => {
   const { toggleColorMode, colorMode } = useColorMode();
   return (
      <footer>
         <Wrap justify="center" my={1}>
            <Tooltip label={colorMode + " mode"}>
               <CustomCard>
                  <Image
                     src="https://upanh.svvui.com/file/20230525054536-Honu-02.png"
                     alt="numerology logo"
                     width="50%"
                     height="50%"
                     placeholder="blur"
                     blurDataURL="https://upanh.svvui.com/file/20230525054536-Honu-02.png"
                     style={{
                        cursor: "pointer",
                     }}
                     onClick={toggleColorMode}
                  />
               </CustomCard>
            </Tooltip>


         </Wrap>
      </footer>
   );
};
