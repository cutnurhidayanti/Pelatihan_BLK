function verifikasiLogin(username, password) {
    try {
        if (username === "adm" && password ==="12345"){
            console.log("berhasil login");
            
        }else if(typeof username!="string" || typeof password != "string"){
           throw new Error("username dan password harus berupa text");
        }else{
            console.log("username dan password harus string");

        }
    } catch (error) {
        console.log(error.message);
        
    }
}

verifikasiLogin("afm", "3154")
verifikasiLogin("adm", "12345")
verifikasiLogin(123, true)