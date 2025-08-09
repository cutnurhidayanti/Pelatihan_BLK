let tinggi = [
    {
        nama : "rose",
        tinggi_badan : 178
    },
    {
        nama : "magnolia",
        tinggi_badan : 153
    },
    {
        nama : "Daisy",
        tinggi_badan : 165
    },
    {
        nama : "Jasmine",
        tinggi_badan : 161
    },
    {
        nama : "Violet",
        tinggi_badan : 159
    },
]

tinggi.sort((a,b)=> a.nama.localeCompare(b.nama))

for (let i = 0; i < tinggi.length; i++) {
    console.log("nama : "+tinggi[i].nama+ ", tinggi badan : "+ tinggi[i].tinggi_badan);
    
}

