# Jar dts generator
Fork of [android-dts-generator](https://github.com/NativeScript/android-dts-generator).

# Usage
## Linux (Ubuntu)
Create a directory with some Jar file inside. 
```Shell
mkdir ~/jarFoldera
# !!!!!!!!!!! COPY SOME Jar FILES INSIDE !!!!!!! 
```

Launch the image and map this directory to /usr/src/jarFolder. 
```Shell
sudo docker run -v ~/jarFolder:/usr/src/jarFolder benjioe14/jar-dts-generator
```

The generate html is saved in ~/jarFolder/dts, open it in a browser. 
```Shell
cat ~/jarFolder/dts/android.d.ts
```

## Windows (Powershell)
Create a directory with some JavaScript file inside.
```Powershell
mkdir D:\jarFolder
# !!!!!!!!!!! COPY SOME Jar FILES INSIDE !!!!!!! 
 
```

Launch the image and map this directory to */usr/src/app*.
```Powershell
docker run -v D:\jarFolder:/usr/src/jarFolder benjioe14/jar-dts-generator
```

The generate html is saved in *D:\jsdoc\out*, open it in a browser.
```Powershell
notepad D:\jarFolder\dts\android.d.ts
```
## Configure
You can replace the default android-dts-generator parameters with your own by putting them a the end of the docker command line: 
```Shell
sudo docker run -v ~/jarFolder:/usr/src/jarFolder benjioe14/jar-dts-generator YOUR_PARAMETERS`
```

# JS doc
The script generate one file by class in the jar. If you want only a file who merge all definitions execute the following command:

**Linux**
```Shell
sed -e 's/\/\*\*//; s/\*\*\///;' -e '1 i\/**' -e  "\$a**/" *.js > all-def.jsdoc; mv all-def.jsdoc all-def.js
```


**Windows (powershell)**
```Powershell
gc *.js >  all-def.jsdoc; mv all-def.jsdoc all-def.js
```


All parameters are describe in the [android-dts-generator documentation](https://github.com/NativeScript/android-dts-generator).
