const logoutController = {};
logoutController.logout = async (req, res)=>{
    //borrar las cookies de "authToken"
    res.clearCookie("authToken")

    return res.json({message: "Sesion cerrada"});

};

export default logoutController