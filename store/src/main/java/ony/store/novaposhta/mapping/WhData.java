package ony.store.novaposhta.mapping;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class WhData {

    @Id
    @JsonProperty("SiteKey")
    private String SiteKey;

    @JsonProperty("Description")
    private String Description;

    @JsonProperty("DescriptionRu")
    private String DescriptionRu;

    @JsonProperty("ShortAddress")
    private String ShortAddress;

    @JsonProperty("ShortAddressRu")
    private String ShortAddressRu;

    @JsonProperty("Phone")
    private String Phone;

    @JsonProperty("TypeOfWarehouse")
    private String TypeOfWarehouse;

    @JsonProperty("Ref")
    private String Ref;

    @JsonProperty("Number")
    private String Number;

    @JsonProperty("CityRef")
    private String CityRef;

    @JsonProperty("CityDescription")
    private String CityDescription;

    @JsonProperty("CityDescriptionRu")
    private String CityDescriptionRu;

    @JsonProperty("SettlementRef")
    private String SettlementRef;

    @JsonProperty("SettlementDescription")
    private String SettlementDescription;

    @JsonProperty("SettlementAreaDescription")
    private String SettlementAreaDescription;

    @JsonProperty("SettlementRegionsDescription")
    private String SettlementRegionsDescription;

    @JsonProperty("SettlementTypeDescription")
    private String SettlementTypeDescription;

    @JsonProperty("SettlementTypeDescriptionRu")
    private String SettlementTypeDescriptionRu;

    @JsonProperty("Longitude")
    private String Longitude;

    @JsonProperty("Latitude")
    private String Latitude;

    @JsonProperty("PostFinance")
    private String PostFinance;

    @JsonProperty("BicycleParking")
    private String BicycleParking;

    @JsonProperty("PaymentAccess")
    private String PaymentAccess;

    @JsonProperty("POSTerminal")
    private String POSTerminal;

    @JsonProperty("InternationalShipping")
    private String InternationalShipping;

    @JsonProperty("SelfServiceWorkplacesCount")
    private String SelfServiceWorkplacesCount;

    @JsonProperty("TotalMaxWeightAllowed")
    private String TotalMaxWeightAllowed;

    @JsonProperty("PlaceMaxWeightAllowed")
    private String PlaceMaxWeightAllowed;

    @JsonProperty("SendingLimitationsOnDimensions")
    @JsonIgnore
    private String SendingLimitationsOnDimensions;

    @JsonProperty("ReceivingLimitationsOnDimensions")
    @JsonIgnore
    private String ReceivingLimitationsOnDimensions;
    @JsonIgnore
    @JsonProperty("Reception")
    private String Reception;
    @JsonIgnore
    @JsonProperty("Delivery")
    private String Delivery;
    @JsonIgnore
    @JsonProperty("Schedule")
    private String Schedule;

    @JsonProperty("DistrictCode")
    private String DistrictCode;

    @JsonProperty("WarehouseStatus")
    private String WarehouseStatus;

    @JsonProperty("WarehouseStatusDate")
    private String WarehouseStatusDate;

    @JsonProperty("CategoryOfWarehouse")
    private String CategoryOfWarehouse;

    @JsonProperty("Direct")
    private String Direct;

    @JsonProperty("RegionCity")
    private String RegionCity;

    @JsonProperty("WarehouseForAgent")
    private String WarehouseForAgent;

    @JsonIgnore
    @JsonProperty("GeneratorEnabled")
    private String GeneratorEnabled;

    @JsonIgnore
    @JsonProperty("MaxDeclaredCost")
    private String MaxDeclaredCost;

    @JsonIgnore
    @JsonProperty("WorkInMobileAwis")
    private String WorkInMobileAwis;

    @JsonIgnore
    @JsonProperty("DenyToSelect")
    private String DenyToSelect;

    @JsonIgnore
    @JsonProperty("CanGetMoneyTransfer")
    private String CanGetMoneyTransfer;

    @JsonIgnore
    @JsonProperty("OnlyReceivingParcel")
    private String OnlyReceivingParcel;

 @JsonIgnore
    @JsonProperty("PostMachineType")
    private String PostMachineType;

@JsonIgnore
    @JsonProperty("PostalCodeUA")
    private String PostalCodeUA;

@JsonIgnore
    @JsonProperty("WarehouseIndex")
    private String WarehouseIndex;

@JsonIgnore
    @JsonProperty("PostomatFor")
    private String PostomatFor;




    public String getSiteKey() {
        return SiteKey;
    }

    public void setSiteKey(String siteKey) {
        SiteKey = siteKey;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getDescriptionRu() {
        return DescriptionRu;
    }

    public void setDescriptionRu(String descriptionRu) {
        DescriptionRu = descriptionRu;
    }

    public String getShortAddress() {
        return ShortAddress;
    }

    public void setShortAddress(String shortAddress) {
        ShortAddress = shortAddress;
    }

    public String getShortAddressRu() {
        return ShortAddressRu;
    }

    public void setShortAddressRu(String shortAddressRu) {
        ShortAddressRu = shortAddressRu;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    public String getTypeOfWarehouse() {
        return TypeOfWarehouse;
    }

    public void setTypeOfWarehouse(String typeOfWarehouse) {
        TypeOfWarehouse = typeOfWarehouse;
    }

    public String getRef() {
        return Ref;
    }

    public void setRef(String ref) {
        Ref = ref;
    }

    public String getNumber() {
        return Number;
    }

    public void setNumber(String number) {
        Number = number;
    }

    public String getCityRef() {
        return CityRef;
    }

    public void setCityRef(String cityRef) {
        CityRef = cityRef;
    }

    public String getCityDescription() {
        return CityDescription;
    }

    public void setCityDescription(String cityDescription) {
        CityDescription = cityDescription;
    }

    public String getCityDescriptionRu() {
        return CityDescriptionRu;
    }

    public void setCityDescriptionRu(String cityDescriptionRu) {
        CityDescriptionRu = cityDescriptionRu;
    }

    public String getSettlementRef() {
        return SettlementRef;
    }

    public void setSettlementRef(String settlementRef) {
        SettlementRef = settlementRef;
    }

    public String getSettlementDescription() {
        return SettlementDescription;
    }

    public void setSettlementDescription(String settlementDescription) {
        SettlementDescription = settlementDescription;
    }

    public String getSettlementAreaDescription() {
        return SettlementAreaDescription;
    }

    public void setSettlementAreaDescription(String settlementAreaDescription) {
        SettlementAreaDescription = settlementAreaDescription;
    }

    public String getSettlementRegionsDescription() {
        return SettlementRegionsDescription;
    }

    public void setSettlementRegionsDescription(String settlementRegionsDescription) {
        SettlementRegionsDescription = settlementRegionsDescription;
    }

    public String getSettlementTypeDescription() {
        return SettlementTypeDescription;
    }

    public void setSettlementTypeDescription(String settlementTypeDescription) {
        SettlementTypeDescription = settlementTypeDescription;
    }

    public String getSettlementTypeDescriptionRu() {
        return SettlementTypeDescriptionRu;
    }

    public void setSettlementTypeDescriptionRu(String settlementTypeDescriptionRu) {
        SettlementTypeDescriptionRu = settlementTypeDescriptionRu;
    }

    public String getLongitude() {
        return Longitude;
    }

    public void setLongitude(String longitude) {
        Longitude = longitude;
    }

    public String getLatitude() {
        return Latitude;
    }

    public void setLatitude(String latitude) {
        Latitude = latitude;
    }

    public String getPostFinance() {
        return PostFinance;
    }

    public void setPostFinance(String postFinance) {
        PostFinance = postFinance;
    }

    public String getBicycleParking() {
        return BicycleParking;
    }

    public void setBicycleParking(String bicycleParking) {
        BicycleParking = bicycleParking;
    }

    public String getPaymentAccess() {
        return PaymentAccess;
    }

    public void setPaymentAccess(String paymentAccess) {
        PaymentAccess = paymentAccess;
    }

    public String getPOSTerminal() {
        return POSTerminal;
    }

    public void setPOSTerminal(String POSTerminal) {
        this.POSTerminal = POSTerminal;
    }

    public String getInternationalShipping() {
        return InternationalShipping;
    }

    public void setInternationalShipping(String internationalShipping) {
        InternationalShipping = internationalShipping;
    }

    public String getSelfServiceWorkplacesCount() {
        return SelfServiceWorkplacesCount;
    }

    public void setSelfServiceWorkplacesCount(String selfServiceWorkplacesCount) {
        SelfServiceWorkplacesCount = selfServiceWorkplacesCount;
    }

    public String getTotalMaxWeightAllowed() {
        return TotalMaxWeightAllowed;
    }

    public void setTotalMaxWeightAllowed(String totalMaxWeightAllowed) {
        TotalMaxWeightAllowed = totalMaxWeightAllowed;
    }

    public String getPlaceMaxWeightAllowed() {
        return PlaceMaxWeightAllowed;
    }

    public void setPlaceMaxWeightAllowed(String placeMaxWeightAllowed) {
        PlaceMaxWeightAllowed = placeMaxWeightAllowed;
    }

    public String getSendingLimitationsOnDimensions() {
        return SendingLimitationsOnDimensions;
    }

    public void setSendingLimitationsOnDimensions(String sendingLimitationsOnDimensions) {
        SendingLimitationsOnDimensions = sendingLimitationsOnDimensions;
    }

    public String getReceivingLimitationsOnDimensions() {
        return ReceivingLimitationsOnDimensions;
    }

    public void setReceivingLimitationsOnDimensions(String receivingLimitationsOnDimensions) {
        ReceivingLimitationsOnDimensions = receivingLimitationsOnDimensions;
    }

    public String getReception() {
        return Reception;
    }

    public void setReception(String reception) {
        Reception = reception;
    }

    public String getDelivery() {
        return Delivery;
    }

    public void setDelivery(String delivery) {
        Delivery = delivery;
    }

    public String getSchedule() {
        return Schedule;
    }

    public void setSchedule(String schedule) {
        Schedule = schedule;
    }

    public String getDistrictCode() {
        return DistrictCode;
    }

    public void setDistrictCode(String districtCode) {
        DistrictCode = districtCode;
    }

    public String getWarehouseStatus() {
        return WarehouseStatus;
    }

    public void setWarehouseStatus(String warehouseStatus) {
        WarehouseStatus = warehouseStatus;
    }

    public String getWarehouseStatusDate() {
        return WarehouseStatusDate;
    }

    public void setWarehouseStatusDate(String warehouseStatusDate) {
        WarehouseStatusDate = warehouseStatusDate;
    }

    public String getCategoryOfWarehouse() {
        return CategoryOfWarehouse;
    }

    public void setCategoryOfWarehouse(String categoryOfWarehouse) {
        CategoryOfWarehouse = categoryOfWarehouse;
    }

    public String getDirect() {
        return Direct;
    }

    public void setDirect(String direct) {
        Direct = direct;
    }

    public String getRegionCity() {
        return RegionCity;
    }

    public void setRegionCity(String regionCity) {
        RegionCity = regionCity;
    }

    public String getWarehouseForAgent() {
        return WarehouseForAgent;
    }

    public void setWarehouseForAgent(String warehouseForAgent) {
        WarehouseForAgent = warehouseForAgent;
    }
}
