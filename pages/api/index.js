export default async function handler(req, res) {
  try{
    const {search, page, perPage} = req.query; 
    const url = `${process.env.PIXABAY_URL}${process.env.PIXABAY_KEY}&q=${search}&image_type=photo&page=${page}&per_page=${perPage}`;
    
    let data = await fetch(url);
    data = await data.json();

    return res.status(200).json({ data: data });
  }catch(err){
    return res.status(500).json({ message: err.message });
  }
}
