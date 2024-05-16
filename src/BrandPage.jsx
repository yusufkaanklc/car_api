import { useParams } from "react-router-dom";
import data from "../public/data.json";
import { useEffect, useState } from "react";
import {
  Center,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";

const BrandPage = () => {
  const { brandName } = useParams();
  const [modelsData, setModelsData] = useState();

  useEffect(() => {
    const findModels = data?.brands?.brand?.find(
      (brand) => brand.name._text === brandName
    );

    if (findModels) {
      setModelsData(findModels.models);
    }
  }, [brandName]);

  useEffect(() => {
    console.log(modelsData);
  }, [modelsData]);

  return <></>;
};

export default BrandPage;
