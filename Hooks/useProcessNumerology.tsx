import { useMemo } from "react";
import { NumerologyHookType } from "../Utils/types";
import {
   getSoul,
   getMission,
   getWalksOfLife,
   removeAccents,
   getPersonality,
   getPassion,
   sumAdjacent,
   getBalance,
   getMissingNumbers,
   getRationalThinking,
   substractAdjacent,
} from "../Functions";
import moment from "moment";

export const useProcessNumerology = (
   fullName: string,
   birthDay: string
): NumerologyHookType[] => {
   const data = useMemo(() => {
      const date = moment(birthDay).format("DD");
      const month = moment(birthDay).format("MM");
      const year = moment(birthDay).format("YYYY");
      const currentYear = moment().format("YYYY");
      const currentMonth = moment().format("MM");
      const txtName = fullName.trim();
      const name = removeAccents(txtName.toLocaleUpperCase());
      let completedName: string = "";
      const arrStrName = name.split("");
      arrStrName.map((char, index) => {
         if (
            (char === " " && arrStrName?.[index + 1] !== " ") ||
            char !== " "
         ) {
            completedName += char;
         }
      });

      const arrName = name.replace(/\s/g, "").split("");

      const walksOfLife = getWalksOfLife(birthDay);
      const mission = getMission(name);
      const soul = getSoul(name);
      const resumWalksOfLife = String(walksOfLife).split("");
      const connect = Math.abs(
         sumAdjacent(resumWalksOfLife[0], resumWalksOfLife?.[1] ?? 0) - mission
      );
      const personality = getPersonality(arrName);
      const passion = getPassion(arrName);
      const resumMission = String(mission).split("");

      const mature = sumAdjacent(
         walksOfLife,
         sumAdjacent(resumMission[0], resumMission?.[1] ?? 0),
         "mature"
      ); // walksOfLife + mission; 36 - walksOfLife = đỉnh đầu của chặng đầu tiên
      const balance = getBalance(completedName);
      const missingNumber = getMissingNumbers(arrName).map(
         (item) => item.value
      );
      const subconsciousPower = 9 - missingNumber.length;
      const rationalThinking = getRationalThinking(completedName, date);
      const way1 = sumAdjacent(month, date),
         way2 = sumAdjacent(year, date);
      const way3 = sumAdjacent(way1, way2),
         way4 = sumAdjacent(month, year, "finalWay");
      const way = ` ${way1} ${way2} ${way3} ${way4}`;
      const challenge1 = substractAdjacent(month, date);
      const challenge2 = substractAdjacent(year, date);
      const challenge3 = Math.abs(challenge1 - challenge2);
      const challenge4 = substractAdjacent(month, year);
      const challenges = ` ${challenge1} ${challenge2} ${challenge3} ${challenge4}`;
      const yearIndividual = sumAdjacent(Number(currentYear), date + month);
      const monthIndividual = sumAdjacent(yearIndividual, Number(currentMonth));
      const linkPersonalityAndSoul = substractAdjacent(personality, soul);
      const dateOfBirth = sumAdjacent(date, 0);
      return [
         {
            key: "walksOfLife",
            value: walksOfLife,
            name: "Đường đời",
         },
         {
            key: "dateOfBirth",
            value: dateOfBirth,
            name: "Ngày sinh",
         },
         {
			key: "mission", 
			value: mission, 
			name: "Sứ mệnh" 
		 },
         
      ];
   }, [fullName, birthDay]);
   return data;
};
