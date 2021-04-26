import * as types from '../constants/ActionTypes'
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import { Config } from '../config/config';
axios.defaults.baseURL = Config.api_url;

export function sendOTP(phone) {
    console.log(phone)
    return function (dispatch) {        
        axios.post(`/sendOTP`, phone)
            .then(({ data }) => {
                if (data) {
                    dispatch({ type: types.OTP_SENT, message:data.message}) 
                    dispatch({type:types.SET_OTP,otp:data.code})     
                } else {
                    dispatch({ type: types.AUTH_ERROR, message: data.message })
                }
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: types.AUTH_ERROR, payload: 'Server Connection Error, Try Later.' })
            });
    }
}
export function signin(data) {
    return function (dispatch) {
        axios.post(`/user/signin`, data)
            .then(({ data }) => {
                if (data.success) {
                    dispatch({ type: types.AUTH_USER, user: data.user, token: data.token,role:data.user.role})      

                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("isLogin", true);
                    localStorage.setItem("token", data.token);
                    if(data.user.role === "Customer"){
                        window.location = '/';
                    }
                    else if(data.user.role ==="Administrator"){
                        window.location = '/dashboard';
                    }else{
                        window.location = '/products/list'
                    }
                    
                } else {
                    dispatch({ type: types.LOGIN_ERROR, message: data.message })
                }
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: types.AUTH_ERROR, payload: 'Server Connection Error, Try Later.' })
            });
    }
}

export function signout(data) {
    return function (dispatch) {
        
        axios.defaults.headers.get['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.post(`/user/signout`)
            .then(({ data }) => {
                if (data) {
                    localStorage.setItem("role",false)
                    localStorage.removeItem("token");
                    dispatch({ type: types.USER_LOGOUT })

                    window.location = '/';
                } else {
                    dispatch({ type: types.USER_ERROR, message: data.message })
                }
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
            });
    }
}
export function setPassMsg(){
    return function (dispatch) {
        dispatch({type:types.SET_PASS_MSG,message:''})
    }
}

export function signup(u) {
    console.log(u)

    return function (dispatch) {
        dispatch({type:types.SET_OTP,otp:''})
        axios.post(`/user/signup`, u)
            .then(({ data }) => {
                if (data.result == "success") {
                    dispatch({type:types.ADD_USER,user:data.user})
                      dispatch({type:types.AUTH_ERROR,message:''})
                    window.location = '/pages/login';
                } else {
                    dispatch({ type: types.AUTH_ERROR, message: data.message })
                }
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: types.AUTH_ERROR, payload: 'Server Connection Error, Try Later.' })
            });
    }
}
export function passChange(u) {
    return function (dispatch) {
        axios.post(`/customer/passChange`, u)
            .then(({ data }) => {
                if (data) {
                    dispatch({type:types.SET_PASS_MSG,message:data.message})
                } else {
                    
                    dispatch({ type: types.AUTH_ERROR, message: data.message })
                }
            })
            .catch(error => {
                
                console.log(error);
                dispatch({ type: types.AUTH_ERROR, payload: 'Server Connection Error, Try Later.' })
            });
    }
}
export function addGame(data) {
    return function (dispatch) {
        axios.post(`/game/register`, data)
            .then(({ data }) => {
                if (data) {
                    dispatch({type:types.ADD_GAME,game:data.game})
                    window.location = '/game/game-list';
                } else {
                    
                    dispatch({ type: types.AUTH_ERROR, message: data.message })
                }
            })
            .catch(error => {
                
                console.log(error);
                dispatch({ type: types.AUTH_ERROR, payload: 'Server Connection Error, Try Later.' })
            });
    }
}







// export function updateUser(u) {
//     return function (dispatch) {
        
//         axios.defaults.headers.put['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
//         axios.put(`/user/${u.id}`, u)
//             .then(({ data }) => {
//                 if (data.success) {
//                     window.location.reload(true);
//                 } else {
//                     dispatch({ type: types.USER_ERROR, message: data.message })
//                 }
//             })
//             .catch(error => {
//                 dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//             });
//     }
// }

/////////////////////////////////////////////////////////////////////////////// Game
export const fetchGamesBegin = () => ({
    type: types.FETCH_GAMES_BEGIN
});


export const receiveGames = games => ({
    type: types.RECEIVE_GAMES,
    games:games
})
export const getAllGames = () => dispatch => {
    dispatch(fetchGamesBegin());
    
    axios.defaults.headers.get['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    dispatch(fetchGamesBegin());
    axios.post(`/game/list`)
        .then( result => {
            if (result) {
                dispatch(receiveGames(result.data))
                return result.data
            } else {    
                console.log("no data")
            }
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
        });
}

export const getCategory = () => dispatch => {
    
    axios.defaults.headers.get['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    axios.post(`/category/list`)
        .then( result => {
            if (result) {
                dispatch({
                    type: types.RECEIVE_CATEGORY,
                    category:result.data
                })
                return result.data
            } else {    
                console.log("no data")
            }
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
        });
}
////////////////////////////////////////////////////////////////////////////////////////////////////
export const filterSort = (sort_by) => ({
    type: types.SORT_BY,
    sort_by
});



export function allusers() {
    return function (dispatch) {
        
        axios.defaults.headers.get['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.post(`/users/allUsers`)
            .then(({ data }) => {
                if (data) {
                    dispatch({ type: types.ALL_USER, users: data })
                } else {
                    dispatch({ type: types.USER_ERROR, message: data.message })
                }
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
            });
    }
}


export function deluser(u) {
    return function (dispatch) {
        
        axios.defaults.headers.delete['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.delete(`/user/${u.id}`)
            .then(({ data }) => {
                if (data.success) {
                    window.location.reload(true);
                } else {
                    dispatch({ type: types.USER_ERROR, message: data.message })
                }
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
            });
    }
}


// export function updateuser(u) {
//     return function (dispatch) {
        
//         axios.defaults.headers.put['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
//         axios.put(`/user/${u.id}`, u)
//             .then(({ data }) => {
//                 if (data.success) {
//                     window.location.reload(true);
//                 } else {
//                     dispatch({ type: types.USER_ERROR, message: data.message })
//                 }
//             })
//             .catch(error => {
//                 console.log(error);
//                 dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//             });
//     }
// }

// export const approvePendingStore = (id) => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/store/approvePendingStore/${id}`)
//         .then( result => {
//             if (result) {
//                 console.log("success")
//                 getStores();
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export const deletePendingStore = (id) => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/store/deletePendingStore/${id}`)
//         .then( result => {
//             if (result) {
//                 console.log("success")
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }

// export const approvePendingVendor = (id) => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/vendor/approvePendingVendor/${id}`)
//         .then( result => {
//             if (result) {
//                 console.log("success")
//                 getStores();
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export const approvePendingProduct = (id) => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/vendor/approvePendingProduct/${id}`)
//         .then( result => {
//             if (result) {
//                 console.log("success")
//                 getStores();
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export const deletePendingProduct = (id) => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/store/deletePendingProduct/${id}`)
//         .then( result => {
//             if (result) {
//                 console.log("success")
//                 return result.data
//             } else {    
//                 console.log("no data") 
//             }
//         })
//         .catch(error => {
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export const closeVendor = (id) => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     axios.post(`/vendor/closeVendor/${id}`)
//         .then( result => {
//             if (result) {
                
//                 dispatch({type:types.VENDOR_UPDATE,vendor:result.data.vendor})

//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export const selectVendor = (vendor) =>(dispatch) =>{
//     dispatch({type:types.SELECT_VENDOR,vendor:vendor})
// }
// export const selectUser = (user) =>(dispatch) =>{
//     dispatch({type:types.SELECT_USER,user:user})
// }
// export const selectStore = (store) =>(dispatch) =>{
//     dispatch({type:types.SELECT_STORE,store:store})
// }
// export const selectProduct = (product) => (dispatch) => {
//     dispatch({type:types.SELECT_PRODUCT,product:product})
// }
// export const deleteVendor = (id) => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     axios.delete(`/vendor/deleteVendor/${id}`)
//         .then( result => {
//             if (result) {
//                 dispatch({type:types.DEL_VENDOR,id:id})
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export const deleteUser = (id) => (dispatch) => {

//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     axios.delete(`/deleteUser/${id}`)
//         .then( result => {
//             if (result) {
//                     dispatch({ type: types.USER_DELETE, id: id})                
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export const closeUser = (id) => (dispatch) => {
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     axios.put(`/user/closeUser/${id}`)
//         .then( result => {
//             if (result) {
//                 console.log(id)
//                     dispatch({ type: types.UPDATE_USER, user:result.data.user})
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }



// export const getStore = () => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/store/lists`)
//         .then( result => {
//             if (result) {
//                 dispatch({type:types.RECEIVE_STORES,stores:result.data})
//                 // dispatch({type:types.SET_STOREID,storeId:result.data[0]._id})
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export const getOrders = () => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/order/list`)
//         .then( result => {
//              if (result) {
//                 dispatch({type:types.RECEIVE_ORDERS,orders:result.data})
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }

// export const getTryHome = () => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/tryHome/list`)
//         .then( result => {
//              if (result) {
//                 dispatch({type:types.RECEIVE_TRY_HOME,tryHomes:result.data})
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }

// export const getTenPlusOne = () => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/tenPlusOne/list`)
//         .then( result => {
//              if (result) {
//                 dispatch({type:types.RECEIVE_TENPLUSONE,tenPlusOnes:result.data})
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }



// export function updateMetalRate(rate) {
//     return function (dispatch) {
        
//         axios.defaults.headers.put['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
//         axios.defaults.headers.put['x-access-token'] = localStorage.getItem('token');
//         axios.post(`/store/rate`, rate)
//             .then(({ data }) => {
//                 if (data.result) {
//                     window.location.reload(true)
//                     window.location = '/dashboard';;
//                 } else {
//                     dispatch({ type: types.USER_ERROR, message: data.message })
//                 }
//             })
//             .catch(error => {
//                 console.log(error);
//                 dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//             });
//     }
// }

// export const getMetalHistory = () => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/all/metalHistory`)
//         .then( result => {
//             if (result) {
//                 dispatch({type:types.RECEIVE_METAL_HISTORY,metalHistory:result.data})
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export const saveOrderDetail = (items,customer) => (dispatch) => {
//     const data = [];
//     console.log("sdfsdf")
//     console.log(items)
//     for(let i = 0 ; i < items.length; i ++){
//         data[i] = {
//             productId:items[i],
//             quantity:items[i].qty,
//             customerId:customer,
//             orderDate:new Date(),
//             total:items[i].sum,
//             status:"paid",
//             orderStatus:"not delivery",
//             complete:false,
//             storeId:items[i].storeId   
//         }
//     }    
//     console.log(data)
//     dispatch({type:types.ADD_ORDER_DETAIL,orders:data})

//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     dispatch(fetchProductsBegin());
//     axios.post(`/saveOrder`,data)
//         .then( result => {
//             if (result) {
//                 dispatch({type:types.ADD_ORDER_DETAIL,orderDetails:data})
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }

// export const createStore = (data) => dispatch =>{
    
//     axios.defaults.headers.get['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
//     axios.post(`/store/register`,data)
//         .then( result => {
//             if (result) {
//                 dispatch({type:types.ADD_STORE,payload:result.data.store})
//                 console.log(result)
                
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });
// }
// export const closeStore = (id) => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     axios.post(`/store/closeStore/${id}`)
//         .then( result => {
//             if (result) {
                
//                 dispatch({type:types.STORE_UPDATE,store:result.data.store})

//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export const deleteStore = (id) => (dispatch) => {
    
//     axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token');
//     axios.delete(`/store/deleteStore/${id}`)
//         .then( result => {
//             if (result) {
//                 dispatch({type:types.DEL_STORE,id:id})
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }
// export function storeUpdate(id,u) {
//     return function (dispatch) {
//         axios.post(`/store/update/${id}`, u)
//             .then(({ data }) => {

//                     dispatch({type:types.SELECT_STORE,store:data.store})
//                     dispatch({type:types.STORE_UPDATE,store:data.store})

//             })
//             .catch(error => {
//                 dispatch({ type: types.AUTH_ERROR, payload: 'Server Connection Error, Try Later.' })
//             });
//     }
// }

// export function saveTenPlusOne(data) {
//     return function (dispatch) {
//         axios.post(`/tenPlusOne/save`, data)
//             .then(({ data }) => {
//                     dispatch({type:types.ADD_TENPLUSONE,tenPlusOne:data.tenPlusOne})

//             })
//             .catch(error => {
//                 dispatch({ type: types.AUTH_ERROR, payload: 'Server Connection Error, Try Later.' })
//             });
//     }
// }


// export function getWalletHistory(id) {
//     return function (dispatch) {
//         axios.post(`/wallet/history/${id}`)
//             .then(({ data }) => {
//                     dispatch({type:types.RECEIVE_WALLET_HISTORY,walletHistory:data.walletHistory})

//             })
//             .catch(error => {
//                 dispatch({ type: types.AUTH_ERROR, payload: 'Server Connection Error, Try Later.' })
//             });
//     }
// }



// export const getRate = () => (dispatch) => {
//     console.log("2222222")
//     
//     axios.defaults.headers.get['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
//     axios.post(`/rate/list`)
//         .then( result => {
//             if (result) {
//                 dispatch({type:types.RECEIVE_RATE,rate:result.data})
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });

// }

// export const getAllProducts = () => dispatch => {
//     dispatch(fetchProductsBegin());
//     // shop.getProducts(products => {
//     //     dispatch(receiveProducts(products));
//     //     return products;
//     // })
//     console.log("getAllProducts")
//     
//     axios.defaults.headers.get['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
//     dispatch(fetchProductsBegin());
//     axios.post(`/product/list`)
//         .then( result => {
//             if (result) {
//                 dispatch(receiveProducts(result.data))
//                 return result.data
//             } else {    
//                 console.log("no data")
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             dispatch({ type: types.USER_ERROR, payload: 'Server Connection Error, Try Later.' })
//         });
// }
// export const fetchSingleProduct = productId => ({
//     type: types.FETCH_SINGLE_PRODUCT,
//     productId
// })







