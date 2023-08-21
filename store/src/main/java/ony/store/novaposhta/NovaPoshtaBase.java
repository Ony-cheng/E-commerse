package ony.store.novaposhta;


import ony.store.novaposhta.mapping.CitiesData;
import ony.store.novaposhta.mapping.WhData;
import ony.store.novaposhta.nprepository.CitiesDataRepository;
import ony.store.novaposhta.nprepository.WhDataRepository;
import ony.store.novaposhta.utils.MyUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;

import java.util.ArrayList;
import java.util.List;

@Component
public class NovaPoshtaBase {

    @Autowired
    WhDataRepository whDataRepository;
    @Autowired
    NovaPoshtaAPI novaPoshta;

    @Autowired
    CitiesDataRepository citiesDataRepository;



    public void updateWarehouses() throws RestClientException{

        System.out.print("\r" + "Downloading warehouses data from server...");
        List<WhData> whData = new ArrayList<>();

        whData = novaPoshta.fetchOfficesAll();

        System.out.print("\r" + "Warehouses data downloaded \n");
        System.out.println("\n" + "Запис данних в базу. " + whData.size() + " записів");


        int qty = whData.size();

        for(int i=0;i<=qty;i++) {
            whDataRepository.save(whData.get(i));
            System.out.print("\r" + MyUtils.progressBar(((float) i/qty)*100 ) + " " + whData.get(i).getDescription() );
        }
    }

    public void updateCities() throws RestClientException{

        System.out.print("\r" + "Downloading cities data from server...");
        List<CitiesData> citiesData = novaPoshta.fetchCities();
        System.out.print("\r" + "Settlements data downloaded \n");
        System.out.println("\n" + "запис данних в базу. " + citiesData.size() + "записів");
        int citiesQty = citiesData.size();

        for(int i=0;i<=citiesQty;i++) {
            citiesDataRepository.save(citiesData.get(i));
            System.out.print("\r" + MyUtils.progressBar(((float) i/citiesQty)*100 ) + " " + citiesData.get(i).getDescription() );

        }

    }

    public void updateBase(){

    }
}
