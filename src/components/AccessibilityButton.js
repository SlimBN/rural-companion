import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { IonFab, IonFabList, IonFabButton, IonIcon } from '@ionic/react'
import { reloadOutline, helpOutline, pauseOutline } from 'ionicons/icons'

import { informationSentences, categorySentences } from '../static-data/sentences'
import { generateUserInstructions } from '../config/tts'

function AccessibilityButton({ SYNTH, utterance }) {
	return (
		<Fragment>
			<IonFab vertical="bottom" horizontal="end" style={{ margin: '1rem' }}>
				<IonFabButton color="dark">
					<IonIcon icon={helpOutline} />
				</IonFabButton>
				<IonFabList side="top">
					<IonFabButton
						onClick={() => {
							SYNTH.cancel()
							let sentences = Object.values(informationSentences)
							let instruction = generateUserInstructions(sentences)
							utterance.text = instruction
							SYNTH.speak(utterance)
						}}
					>
						<IonIcon icon={reloadOutline} />
					</IonFabButton>
					<IonFabButton
						onClick={() => {
							SYNTH.cancel()
						}}
					>
						<IonIcon icon={pauseOutline} />
					</IonFabButton>
				</IonFabList>
			</IonFab>
		</Fragment>
	)
}

const mapStateToProps = (state) => {
	const { SYNTH, utterance } = state.voice
	return {
		SYNTH,
		utterance
	}
}

export default connect(mapStateToProps)(AccessibilityButton)
