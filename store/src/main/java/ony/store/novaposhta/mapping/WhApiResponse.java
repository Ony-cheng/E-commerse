package ony.store.novaposhta.mapping;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class WhApiResponse {

    @JsonProperty("success")
    private boolean success;

    @JsonProperty("data")
    private List<WhData> data ;

    @JsonProperty("errors")
    private List<String> errors;

    @JsonProperty("warnings")
    private List<String> warnings;


    @JsonProperty("info")
    private WhApiInfo info;

    @JsonProperty("messageCodes")
    private List<String> messageCodes;

    @JsonProperty("errorCodes")
    private List<String> errorCodes;

    @JsonProperty("warningCodes")
    private List<String> warningCodes;

    @JsonProperty("infoCodes")
    private List<String> infoCodes;

    @JsonIgnore
    @JsonProperty("translatedErrors")
    private List<String> translatedErrors;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public List<WhData> getData() {
        return data;
    }

    public void setData(List<WhData> data) {
        this.data = data;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public List<String> getWarnings() {
        return warnings;
    }

    public void setWarnings(List<String> warnings) {
        this.warnings = warnings;
    }

    public WhApiInfo getInfo() {
        return info;
    }

    public void setInfo(WhApiInfo info) {
        this.info = info;
    }

    public List<String> getMessageCodes() {
        return messageCodes;
    }

    public void setMessageCodes(List<String> messageCodes) {
        this.messageCodes = messageCodes;
    }

    public List<String> getErrorCodes() {
        return errorCodes;
    }

    public void setErrorCodes(List<String> errorCodes) {
        this.errorCodes = errorCodes;
    }

    public List<String> getWarningCodes() {
        return warningCodes;
    }

    public void setWarningCodes(List<String> warningCodes) {
        this.warningCodes = warningCodes;
    }

    public List<String> getInfoCodes() {
        return infoCodes;
    }

    public void setInfoCodes(List<String> infoCodes) {
        this.infoCodes = infoCodes;
    }
}
