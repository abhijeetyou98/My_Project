import { useContext, useEffect, useState } from "react";
import UserContext from "./user.context";
import { doLoginLocalStorage, doLogoutFromLocalStorage, getDataFromLocalStorage, isLoggedIn } from "../auth/HelperAuth";

const UserProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState(null);
    // const [isAdminUser, setIsAdminUser] = useState(false);


    useEffect(() => {
        setIsLogin(isLoggedIn());
        setUserData(getDataFromLocalStorage());
      }, []);

      const doLogin = (data) => {
        doLoginLocalStorage(data);
        setIsLogin(true);
        // setIsAdminUser(adminUser());
        setUserData(getDataFromLocalStorage());
      };
    
      //logout
      const doLogout = () => {
        doLogoutFromLocalStorage();
        setIsLogin(false);
        // setIsAdminUser(adminUser());
        setUserData(null);
      };

return (

<UserContext.Provider value={{userData: userData,
                            //    setUserData: setUserData,
                               isLogin: isLogin,
                               setIsLogin: setIsLogin,
                               login: doLogin,
                               logout: doLogout,
                              }}>
{children}
</UserContext.Provider>

);
};
export default UserProvider;
