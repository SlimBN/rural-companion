import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { IonIcon, IonButton, IonCard, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react'

import AccessibilityButton from './AccessibilityButton'
import { setAudioSrc } from '../actions'
import AudibleComponent from './AudibleComponent'

const renderButton = (index, stop) => {
	const colors = ['danger', 'success', 'primary', 'warning', 'secondary', 'tertiary', 'light', 'medium', 'dark']

	return (
		<div style={{ color: 'white' }}>
			<IonButton color={`${colors[index]}`} size="large" onClick={() => stop()}>
				&gt;
			</IonButton>
		</div>
	)
}

// temporary method
const translateToHindi = (title) => {
	const hindi = {
		women: 'महिलाएं',
		children: 'शिशु',
		cattle: 'पशु',
		disease: 'रोग',
		nutrition: 'पोषण',
		hygiene: 'स्वच्छता',
		virus: 'कोविड - 19',
		symptoms: 'लक्षण',
		handwashing: 'हाथ धोना',
		outdoor: 'घर के बाहर',
		outdoorToIndoor: 'घर लौटते समय',
		indoor: 'घर के अंदर'
	}

	if (title in hindi) {
		return hindi[title]
	} else {
		return title
	}
}

const renderCards = (cards, match, play, stop, setAudioSrc) => {
	return cards.map((card, index) => {
		return (
			<AudibleComponent src="https://res.cloudinary.com/dndf9znin/video/upload/v1595749407/sounds/subcat_nutrition.mp3">
				<IonCard
					onClick={() => {
						// stop()
						// setAudioSrc('https://res.cloudinary.com/dndf9znin/video/upload/v1595261131/file_example_MP3_1MG_jvuy7w.mp3')
						// play()
					}}
					// TODO : remove this hardcoding
					// To prevent accessibility button overlap
					style={{ marginBottom: index === cards.length - 1 ? '15vh' : 'auto' }}
				>
					<IonGrid>
						<IonRow className="ion-align-items-center">
							<IonCol size="4">
								<IonIcon src={card.img_url} style={{ fontSize: '100px' }} />
							</IonCol>
							<IonCol size="5" className="ion-text-center">
								<strong>{translateToHindi(card.title)}</strong>
							</IonCol>

							<IonCol size="3">
								<Link to={`${match.url}${card.desc}/`} onClick={(e) => e.stopPropagation()}>
									{renderButton(index, stop)}
								</Link>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonCard>
			</AudibleComponent>
		)
	})
}

const CardList = ({ cards, match, play, stop, setAudioSrc, ...props }) => {
	// useEffect(() => {
	// 	console.log('here')

	// 	setAudioSrc('https://res.cloudinary.com/dndf9znin/video/upload/v1595261131/file_example_MP3_1MG_jvuy7w.mp3')
	// 	play()
	// }, [match.path])

	return (
		<Fragment>
			{/* <AccessibilityButton play={play} stop={stop} /> */}
			<IonContent>{renderCards(cards, match, play, stop, setAudioSrc)}</IonContent>
			{/* <AudibleComponent>
				<IonButton>Test me</IonButton>
			</AudibleComponent> */}
		</Fragment>
	)
}

const mapStateToProps = (state) => {
	const { src } = state.audio
	return {
		src
	}
}

export default connect(mapStateToProps, { setAudioSrc })(CardList)
