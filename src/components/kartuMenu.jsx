import LabelHarga from  './labelHarga'

function KartuMenu({nama, harga, kategori = "Makanan"}){
    return (
        <div>
            <h2>{nama}</h2>
            <h2>{kategori}</h2>
            <LabelHarga nilai= {harga} />

        </div>
    )
}
export default KartuMenu;