import axios from "axios";

const apiPrivateSchools = process.env.REACT_APP_API_URL_PRIVATE;
const apiPublicSchools = "https://geodados-cml.hub.arcgis.com/datasets/escolas-p%C3%BAblicas-pr%C3%A9-escolar-1/explore?location=38.745180%2C-9.159212%2C13.23";


export const getPrivateSchools = async () => {
   const res = await axios.get(
     "https://services.arcgis.com/1dSrzEWVQn5kHHyK/arcgis/rest/services/POIEducacao/FeatureServer/5/query?where=1%3D1&outFields=*&f=pgeojson"
   );
   return res.data.features;
 };

 export const getPublicSchools = async () => {
      const res = await axios.get(
         "https://services.arcgis.com/1dSrzEWVQn5kHHyK/arcgis/rest/services/POIEducacao/FeatureServer/9/query?outFields=*&where=1%3D1&f=geojson"
      );
      return res.data.features;
    };