import labelHarga from  './components/labelHarga'

function labelHarga({nama, harga, kategori }){
    return (
        <div className = "panel" > 
        {
            judul && <h2>
                {
                    judul 
                }
            </h2>
        }
        {children}
        </div>
    )
}
export default panel