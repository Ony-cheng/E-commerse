package ony.store.novaposhta.mapping;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WhApiInfo {

    @JsonProperty("totalCount")
    private String totalCount;

    public  String  getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(String  totalCount) {
        this.totalCount = totalCount;
    }
}
