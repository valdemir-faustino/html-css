function temp(request, response){
    const dynamicDate= new Date ();
    response.json({
        data:DynamicsCompressorNode.toGMTString()});
}
export default temp;