package ony.store.novaposhta.utils;

public class MyUtils {

    public static String progressBar(float percentage){
        String progessBar = Float.toString((int) percentage) + " % ";

        for (int i=0; i<99;i++){
            if (i<percentage) {
                progessBar = progessBar + "\u2588";
            }else{
                progessBar = progessBar + "\u2591";
            }

        }


        return progessBar;
    }
}
