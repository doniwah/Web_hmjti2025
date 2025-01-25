const express = require('express')
const mysql = require("mysql")
const app = express()
// const path = require('path')

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static('css'));
app.use(express.static('image'));
app.use('/images', express.static('images'))

const db = mysql.createConnection({
    host: "localhost",
    database: "hmj",
    user: "root",
    password: ""
})

db.connect((err) => {
    if (err) throw err
    console.log('Database connected')

    const sql = `
        SELECT 
            artikel.*, 
            kategori.nama_kategori, 
            TO_BASE64(picture) as base64Image 
        FROM artikel 
        JOIN kategori ON artikel.id_kategori = kategori.id_kategori
    `

    db.query(sql, (err, result) => {
        if (err) throw err
        const datas = result.map(item => ({
            ...item,
            base64Image: item.base64Image ? `data:image/jpeg;base64,${item.base64Image}` : null
        }))

        app.get("/", (req, res) => {
            res.render("berita", { 
                datas: datas, 
                title: "ARTIKEL", 
                formatDate: (dateString) => {
                    const date = new Date(dateString);
                    return date.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    });
                }
            })
        })
    })
})


app.listen(8000, () => {
    console.log("server ready");
})