import {
   FC,
   useId,
   useRef,
   useState,
   ChangeEvent,
   useDeferredValue,
} from "react";
import {
   Box,
   Wrap,
   Input,
   VStack,
   InputDate,
   useColorModeValue,
} from "Components";
import { RenderItem } from "./RenderItem";
import { useProcessNumerology } from "Hooks";

export const Numerology: FC = () => {
   const id = useId();
   const color = useColorModeValue("black", "white");
   const colorBorder = useColorModeValue("gray.200", "gray.600");
   const refInputName = useRef<HTMLInputElement>(null);
   const [name, setName] = useState<string>("Nguyễn Ngọc Nghĩa");
   const [birth, setBirth] = useState<string>("1990-11-16");
   const deferredName = useDeferredValue(name);
   const deferredBirth = useDeferredValue(birth);
   const data = useProcessNumerology(deferredName, deferredBirth);
   return (
      <Box>
         <VStack spacing={2} align="stretch">
            <Box h="40px">
               <Input
                  autoFocus
                  rounded={50}
                  onClick={() => refInputName.current?.select()}
                  ref={refInputName}
                  defaultValue={deferredName}
                  placeholder="Your full name, ex: 'Nguyen Van A'"
                  w={{ md: "50%", xs: "100%" }}
                  textAlign="center"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                     setName(e.target.value)
                  }
                  color={color}
               />
            </Box>

            <Box>
               <InputDate
                  rounded={50}
                  getValue={(date) => setBirth(date)}
                  defaultValue={birth}
                  color={color}
               />
            </Box>
         </VStack>

         <Box as="form">
            <Box
               py={4}
               px={2}
               as="fieldset"
               textAlign="center"
               borderRadius={5}
               border="1px solid"
               borderColor={colorBorder}
            >
               <Box as="legend" fontSize={20} fontWeight={800} color="red.400">
                  Bộ 3 Chỉ số của bạn:
               </Box>

               <Wrap spacing="10px" justify="center" pb={2}>
                  {data.map((item, index: number) => (
                     <RenderItem key={id + index} item={item} />
                  ))}
               </Wrap>
            </Box>
         </Box>
      </Box>
   );
};
