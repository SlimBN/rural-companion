import React from 'react'
import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonIcon,
	IonItem,
	IonLabel
} from '@ionic/react'
// import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { GiCow } from 'react-icons/gi'
import { FaBaby } from 'react-icons/fa'
import { IoIosWoman } from 'react-icons/io'
import CardList from './components/CardList'
// import { IonReactRouter } from '@ionic/react-router'
// import { ellipse, square, triangle } from 'ionicons/icons'
// import Tab1 from './pages/Tab1'
// import Tab2 from './pages/Tab2'
// import Tab3 from './pages/Tab3'

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const cards = [
	{
		img: IoIosWoman,
		desc: 'women'
	},
	{
		img: FaBaby,
		desc: 'children'
	},
	{
		img: GiCow,
		desc: 'cattle'
	}
]

const App = () => (
	// <IonApp>
	// 	<IonReactRouter>
	// 		<IonTabs>
	// 			<IonRouterOutlet>
	// 				<Route path="/tab1" component={Tab1} exact={true} />
	// 				<Route path="/tab2" component={Tab2} exact={true} />
	// 				<Route path="/tab3" component={Tab3} />
	// 				<Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
	// 			</IonRouterOutlet>
	// 			<IonTabBar slot="bottom">
	// 				<IonTabButton tab="tab1" href="/tab1">
	// 					<IonIcon icon={triangle} />
	// 					<IonLabel>Tab 1</IonLabel>
	// 				</IonTabButton>
	// 				<IonTabButton tab="tab2" href="/tab2">
	// 					<IonIcon icon={ellipse} />
	// 					<IonLabel>Tab 2</IonLabel>
	// 				</IonTabButton>
	// 				<IonTabButton tab="tab3" href="/tab3">
	// 					<IonIcon icon={square} />
	// 					<IonLabel>Tab 3</IonLabel>
	// 				</IonTabButton>
	// 			</IonTabBar>
	// 		</IonTabs>
	// 	</IonReactRouter>
	// </IonApp>
	<IonApp>
		<IonContent>
			<CardList cards={cards} />
		</IonContent>
	</IonApp>
)

export default App
