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
                     src="/Images/numerologyPNG.png"
                     alt="numerology logo"
                     width="50%"
                     height="50%"
                     placeholder="blur"
                     blurDataURL="/Images/numerologyPNG.png"
                     style={{
                        cursor: "pointer",
                     }}
                     onClick={toggleColorMode}
                  />
               </CustomCard>
            </Tooltip>


         </Wrap>
			© 2023 SVCorp | Phone: (+84).987.42.3333 | Address: Lô E3 Dương Khuê, Mai Dịch, Cầu Giấy, Hà Nội.
      </footer>
   );
};
