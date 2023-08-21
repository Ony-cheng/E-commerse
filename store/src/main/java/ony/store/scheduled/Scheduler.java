package ony.store.scheduled;

import ony.store.novaposhta.NovaPoshtaBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;

@Component
public class Scheduler {

    NovaPoshtaBase novaPoshtaBase;

    @Autowired
    public Scheduler(NovaPoshtaBase novaPoshtaBase) {
        this.novaPoshtaBase = novaPoshtaBase;
    }



    @Scheduled(cron = "0 21 14 * * ?")
     void updatePostBase(){

        int citiesBaseUpdateAttempts = 0;

        int whBaseUpdateAttempts = 0;

        final int MAX_ATTEMPTS = 5;

        while (citiesBaseUpdateAttempts < MAX_ATTEMPTS) {
            try {
                citiesBaseUpdateAttempts++;
                novaPoshtaBase.updateCities();
            } catch (RestClientException e) {
                System.out.println("Cities base update failed on attempt " +
                        citiesBaseUpdateAttempts);
                e.printStackTrace();
                continue;
            }

            break;
        }

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        while (whBaseUpdateAttempts < MAX_ATTEMPTS) {
            try {
                whBaseUpdateAttempts++;
                novaPoshtaBase.updateWarehouses();
            } catch (RestClientException e) {
                System.out.println("Warehouses base update failed on attempt " +
                        whBaseUpdateAttempts);

                e.printStackTrace();
                continue;
            }
            break;
        }

    }
}
