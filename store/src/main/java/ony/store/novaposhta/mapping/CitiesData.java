package ony.store.novaposhta.mapping;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CitiesData {

    @JsonProperty("Description")
    private String description;

    @JsonProperty("DescriptionRu")
    private String descriptionRu;

    @JsonProperty("Ref")
    private String ref;

    @JsonProperty("Delivery1")
    private String delivery1;

    @JsonProperty("Delivery2")
    private String delivery2;

    @JsonProperty("Delivery3")
    private String delivery3;

    @JsonProperty("Delivery4")
    private String delivery4;

    @JsonProperty("Delivery5")
    private String delivery5;

    @JsonProperty("Delivery6")
    private String delivery6;

    @JsonProperty("Delivery7")
    private String delivery7;

    @JsonProperty("Area")
    private String area;

    @JsonProperty("SettlementType")
    private String settlementType;

    @JsonProperty("IsBranch")
    private String isBranch;

    @JsonProperty("PreventEntryNewStreetsUser")
    private String preventEntryNewStreetsUser;

    @Id
    @JsonProperty("CityID")
    private String cityID;

    @JsonProperty("SettlementTypeDescription")
    private String settlementTypeDescription;

    @JsonProperty("SettlementTypeDescriptionRu")
    private String settlementTypeDescriptionRu;

    @JsonProperty("SpecialCashCheck")
    private int specialCashCheck;

    @JsonProperty("AreaDescription")
    private String areaDescription;

    @JsonProperty("AreaDescriptionRu")
    private String areaDescriptionRu;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescriptionRu() {
        return descriptionRu;
    }

    public void setDescriptionRu(String descriptionRu) {
        this.descriptionRu = descriptionRu;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public String getDelivery1() {
        return delivery1;
    }

    public void setDelivery1(String delivery1) {
        this.delivery1 = delivery1;
    }

    public String getDelivery2() {
        return delivery2;
    }

    public void setDelivery2(String delivery2) {
        this.delivery2 = delivery2;
    }

    public String getDelivery3() {
        return delivery3;
    }

    public void setDelivery3(String delivery3) {
        this.delivery3 = delivery3;
    }

    public String getDelivery4() {
        return delivery4;
    }

    public void setDelivery4(String delivery4) {
        this.delivery4 = delivery4;
    }

    public String getDelivery5() {
        return delivery5;
    }

    public void setDelivery5(String delivery5) {
        this.delivery5 = delivery5;
    }

    public String getDelivery6() {
        return delivery6;
    }

    public void setDelivery6(String delivery6) {
        this.delivery6 = delivery6;
    }

    public String getDelivery7() {
        return delivery7;
    }

    public void setDelivery7(String delivery7) {
        this.delivery7 = delivery7;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getSettlementType() {
        return settlementType;
    }

    public void setSettlementType(String settlementType) {
        this.settlementType = settlementType;
    }

    public String getIsBranch() {
        return isBranch;
    }

    public void setIsBranch(String isBranch) {
        this.isBranch = isBranch;
    }

    public String getPreventEntryNewStreetsUser() {
        return preventEntryNewStreetsUser;
    }

    public void setPreventEntryNewStreetsUser(String preventEntryNewStreetsUser) {
        this.preventEntryNewStreetsUser = preventEntryNewStreetsUser;
    }

    public String getCityID() {
        return cityID;
    }

    public void setCityID(String cityID) {
        this.cityID = cityID;
    }

    public String getSettlementTypeDescription() {
        return settlementTypeDescription;
    }

    public void setSettlementTypeDescription(String settlementTypeDescription) {
        this.settlementTypeDescription = settlementTypeDescription;
    }

    public String getSettlementTypeDescriptionRu() {
        return settlementTypeDescriptionRu;
    }

    public void setSettlementTypeDescriptionRu(String settlementTypeDescriptionRu) {
        this.settlementTypeDescriptionRu = settlementTypeDescriptionRu;
    }

    public int getSpecialCashCheck() {
        return specialCashCheck;
    }

    public void setSpecialCashCheck(int specialCashCheck) {
        this.specialCashCheck = specialCashCheck;
    }

    public String getAreaDescription() {
        return areaDescription;
    }

    public void setAreaDescription(String areaDescription) {
        this.areaDescription = areaDescription;
    }

    public String getAreaDescriptionRu() {
        return areaDescriptionRu;
    }

    public void setAreaDescriptionRu(String areaDescriptionRu) {
        this.areaDescriptionRu = areaDescriptionRu;
    }
}
