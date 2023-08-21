package ony.store.novaposhta;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import ony.store.novaposhta.mapping.CitiesApiResponse;
import ony.store.novaposhta.mapping.CitiesData;
import ony.store.novaposhta.mapping.WhApiResponse;
import ony.store.novaposhta.mapping.WhData;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Component
public class NovaPoshtaAPI {

    private static  final String BASE_URL = "https://api.novaposhta.ua/v2.0/json/";
    private static  final String API_KEY = "39c03c02d1f5d6121249c95298fbbde2";

    private static  final String GET_WAREHOUSES = "getWarehouses";

    private static  final String GET_CITIES = "getCities";



    public List<CitiesData> fetchCities() throws RestClientException{

        MethodProperties methodProperties = new MethodProperties();

        NPApiRequest npApiRequest = new NPApiRequest(API_KEY, GET_CITIES, methodProperties);

        String requestJson = npApiRequest.toJson();

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> request = new HttpEntity<>(requestJson, headers);

        ResponseEntity<String> response = restTemplate.exchange(BASE_URL,
                HttpMethod.POST, request, String.class);

        CitiesApiResponse citiesApiResponse = new CitiesApiResponse();

        try{
            ObjectMapper objectMapper = new ObjectMapper();
            citiesApiResponse = objectMapper.readValue(response.getBody(), CitiesApiResponse.class);
        }catch (IOException e){
            e.printStackTrace();
        }



//-------------------------------Download from file for debug purposes-------------------------------
//
//        String filePath = "e:\\DailyCoding\\ApiDebug\\data\\cities.json";
//        CitiesApiResponse citiesApiResponse = new CitiesApiResponse();
//        try {
//            ObjectMapper objectMapper = new ObjectMapper();
//            File file = new File(filePath);
//            citiesApiResponse = objectMapper.readValue(file, CitiesApiResponse.class);
//        }catch (IOException e){
//            e.printStackTrace();
//        }


//---------------------------------------------------------------------------------------------------
        return  citiesApiResponse.getData();
    }



    public List<WhData> fetchOfficesAll() throws RestClientException {
        MethodProperties methodProperties = new MethodProperties();

        NPApiRequest npApiRequest = new NPApiRequest(API_KEY, GET_WAREHOUSES, methodProperties );

        String requestJson = npApiRequest.toJson();

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> request = new HttpEntity<>(requestJson, headers);

        ResponseEntity<String> response = restTemplate.exchange(BASE_URL,
                HttpMethod.POST, request, String.class);


        WhApiResponse whApiResponse = new WhApiResponse();

        try{
            ObjectMapper objectMapper = new ObjectMapper();
            whApiResponse = objectMapper.readValue(response.getBody(), WhApiResponse.class);
        }catch (IOException e){
            e.printStackTrace();
        }

        return  whApiResponse.getData();
    }




    private class NPApiRequest{
        private String apiKey;

        private  String modelName = "Address";

        private  String calledMethod ;

        private MethodProperties methodProperties;

        public NPApiRequest() {
        }

        public NPApiRequest(String apiKey, String calledMethod, MethodProperties methodProperties) {
            this.apiKey = apiKey;
            this.calledMethod = calledMethod;
            this.methodProperties = methodProperties;
        }

        public String getApiKey() {
            return apiKey;
        }

        public void setApiKey(String apiKey) {
            this.apiKey = apiKey;
        }

        public String getModelName() {
            return modelName;
        }

        public void setModelName(String modelName) {
            this.modelName = modelName;
        }

        public String getCalledMethod() {
            return calledMethod;
        }

        public void setCalledMethod(String calledMethod) {
            this.calledMethod = calledMethod;
        }

        public MethodProperties getMethodProperties() {
            return methodProperties;
        }

        public void setMethodProperties(MethodProperties methodProperties) {
            this.methodProperties = methodProperties;
        }

        public String toJson()   {

            ObjectMapper mapper = new ObjectMapper();
            String json = null;
            try {
                json = mapper.writeValueAsString(this);
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }

            return json;
        }
    }

    private class MethodProperties{

        @JsonProperty("CityRef")
        private String cityRef;

        public String getCityRef() {
            return cityRef;
        }

        public void setCityRef(String cityRef) {
            this.cityRef = cityRef;
        }
    }
}
