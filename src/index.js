import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './components/app';
import { ScrollContext } from 'react-router-scroll-4';
import {Provider} from 'react-redux';
import store from './store';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import translations from './constants/translations'
// Components
import Dashboard from './components/dashboard';
import Home_Page from './components/home_page/main'
import Game_List from './components/home_page/game_list'
import Tournamant_List from './components/home_page/tournamant'
import News_Collection from './components/home_page/news-collection'
// Products physical
import Category from './components/Game/category';
import Game_list from './components/Game/game-list';
import Add_game from './components/Game/add-game';
//Sales
import Orders from './components/sales/orders';
import Transactions_sales from './components/sales/transactions-sales';
//Coupons
import ListCoupons from './components/coupons/list-coupons';
import Create_coupons from './components/coupons/create-coupons';

//Pages
import ListPages from './components/pages/list-page';
import Create_page from './components/pages/create-page';
import Media from './components/media/media';
import List_menu from './components/menus/list-menu';
import Create_menu from './components/menus/create-menu';
import List_user from './components/users/list-user';
import Create_user from './components/users/create-user';
import List_vendors from './components/vendors/list-vendors';
import Create_vendors from './components/vendors/create.vendors';
import Translations from './components/localization/translations';
import Rates from './components/localization/rates';
import Taxes from './components/localization/taxes';
import Profile from './components/settings/profile';
import Reports from './components/reports/report';
import Invoice from './components/invoice';
import Datatable from './components/common/datatable'
import Login from './components/auth/login';

import { getAllGames, getCategory } from './actions'
import { Home } from 'react-feather';

class Root extends Component {
    render() {
        store.dispatch(getAllGames());
        store.dispatch(getCategory());
        return (
            <Provider store = {store}>
                <IntlProvider translations={translations} locale='en'>
                <BrowserRouter basename={'/'}>
                    <ScrollContext>
                        <Switch>
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home_Page} />
                            {/* <Route exact path={`${process.env.PUBLIC_URL}/auth/login`} component={Login} /> */}
                            <Route exact path={`${process.env.PUBLIC_URL}/home_page`} component={Home_Page}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/game_list`} component={Game_List}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/tournamant_list`} component={Tournamant_List}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/news_collection`} component={News_Collection}/>
                            <App>
                                <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
                                    
                                <Route path={`${process.env.PUBLIC_URL}/products/physical/category`} component={Category} />
                                <Route path={`${process.env.PUBLIC_URL}/game/game-list`} component={Game_list} />
                                <Route path={`${process.env.PUBLIC_URL}/game/add-game`} component={Add_game} />



                                <Route path={`${process.env.PUBLIC_URL}/sales/orders`} component={Orders} />
                                <Route path={`${process.env.PUBLIC_URL}/sales/transactions`} component={Transactions_sales} />

                                <Route path={`${process.env.PUBLIC_URL}/coupons/list-coupons`} component={ListCoupons} />
                                <Route path={`${process.env.PUBLIC_URL}/coupons/create-coupons`} component={Create_coupons} />

                                <Route path={`${process.env.PUBLIC_URL}/pages/list-page`} component={ListPages} />
                                <Route path={`${process.env.PUBLIC_URL}/pages/create-page`} component={Create_page} />

                                <Route path={`${process.env.PUBLIC_URL}/media`} component={Media} />

                                <Route path={`${process.env.PUBLIC_URL}/menus/list-menu`} component={List_menu} />
                                <Route path={`${process.env.PUBLIC_URL}/menus/create-menu`} component={Create_menu} />

                                <Route path={`${process.env.PUBLIC_URL}/users/list-user`} component={List_user} />
                                <Route path={`${process.env.PUBLIC_URL}/users/create-user`} component={Create_user} />

                                <Route path={`${process.env.PUBLIC_URL}/vendors/list_vendors`} component={List_vendors} />
                                <Route path={`${process.env.PUBLIC_URL}/vendors/create-vendors`} component={Create_vendors} />

                                <Route path={`${process.env.PUBLIC_URL}/localization/transactions`} component={Translations} />
                                <Route path={`${process.env.PUBLIC_URL}/localization/currency-rates`} component={Rates} />
                                <Route path={`${process.env.PUBLIC_URL}/localization/taxes`} component={Taxes} />

                                <Route path={`${process.env.PUBLIC_URL}/reports/report`} component={Reports} />

                                <Route path={`${process.env.PUBLIC_URL}/settings/profile`} component={Profile} />

                                <Route path={`${process.env.PUBLIC_URL}/invoice`} component={Invoice} />

                                <Route path={`${process.env.PUBLIC_URL}/data-table`} component={Datatable} />

                            </App>
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
                </IntlProvider>
            </Provider>
         
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


