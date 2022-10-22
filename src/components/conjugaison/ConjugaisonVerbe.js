import React from 'react';
import ConjugaisonBox from './ConjugaisonBox';
import ConjugaisonSmallBox from './ConjugaisonSmallBox';
import ModeBox from './ModeBox';
import Parser from 'html-react-parser'
import { conjText,conjMode,conjTemps } from '../../features/ConjIcon';
import InfoVerbe from './InfoVerbe';

/* display conjugaison */
class ConjugaisonVerbe extends React.Component {

    /* display temps + conjugaison */
    renderConjugaisonBox(temps,conjugaison) {
        return <ConjugaisonBox temps={temps} conjugaison={conjugaison} />
    }
    renderConjugaisonSmallBox(temps,conjugaison) {
        return <ConjugaisonSmallBox temps={temps} conjugaison={conjugaison} />
    }    
    renderModeBox(mode) {
        return <ModeBox mode={mode} />        
    }

    /* main conjugaison display only if verb exists */
    render() {
        const info = this.props.vbConjug;
        if (info.caracteristique.existe) {
            return (
                <React.StrictMode>
                    <div id="VerbeConjug">
                        <h1 className='ConjBox text-center bg-primary text-white py-3'>
                            {conjText.conjugaisonVerbe} {info.verbe}
                        </h1>

                    <InfoVerbe info={info}/>
                {/* Indicatif */}
                    {this.renderModeBox(conjMode.indicatif)}
                    <div className='row'>
                    {this.renderConjugaisonBox(conjTemps.IND_P,info.conjugaison.IND_P)}
                    {this.renderConjugaisonBox(conjTemps.IND_PC,info.conjugaison.IND_PC)}
                    {this.renderConjugaisonBox(conjTemps.IND_I,info.conjugaison.IND_I)}
                    {this.renderConjugaisonBox(conjTemps.IND_PQP,info.conjugaison.IND_PQP)}
                    </div>
                    <div className='row'>
                    {this.renderConjugaisonBox(conjTemps.IND_PS,info.conjugaison.IND_PS)}
                    {this.renderConjugaisonBox(conjTemps.IND_PA,info.conjugaison.IND_PA)}
                    {this.renderConjugaisonBox(conjTemps.IND_FS,info.conjugaison.IND_FS)}
                    {this.renderConjugaisonBox(conjTemps.IND_FA,info.conjugaison.IND_FA)}
                    </div>

                    {/* Subjonctif */}
                    {this.renderModeBox(conjMode.subjonctif)}
                    <div className='row'>
                    {this.renderConjugaisonBox(conjTemps.SUBJ_P,info.conjugaison.SUBJ_P)}
                    {this.renderConjugaisonBox(conjTemps.SUBJ_PC,info.conjugaison.SUBJ_PC)}
                    {this.renderConjugaisonBox(conjTemps.SUBJ_I,info.conjugaison.SUBJ_I)}
                    {this.renderConjugaisonBox(conjTemps.SUBJ_PQP,info.conjugaison.SUBJ_PQP)}
                    </div>   
                    {/* Conditionnel */}
                    {this.renderModeBox(conjMode.conditionnel)}
                    <div className='row'>
                    {this.renderConjugaisonBox(conjTemps.COND_P,info.conjugaison.COND_P)}
                    {this.renderConjugaisonBox(conjTemps.COND_PC,info.conjugaison.COND_PC)}
                    {this.renderConjugaisonBox(conjTemps.COND_P2,info.conjugaison.COND_P2)}
                    {this.renderConjugaisonBox(conjTemps.AUCUN,"&nbsp;")}
                    </div>      
                    {/* Impératif & participe */}
                    <div className='row'>
                        <div className='col-6'>
                            {this.renderModeBox(conjMode.imperatif)}
                            <div className='row'>
                                {this.renderConjugaisonSmallBox(conjTemps.IMP_P,info.conjugaison.IMP_P)}
                                {this.renderConjugaisonSmallBox(conjTemps.IMP_PC,info.conjugaison.IMP_PC)}
                            </div>
                        </div>
                        <div className='col-6'>
                            {this.renderModeBox(conjMode.participe)}
                            <div className='row'>
                                {this.renderConjugaisonSmallBox(conjTemps.PART_PR,info.conjugaison.PART_PR)}
                                {this.renderConjugaisonSmallBox(conjTemps.PART_ALL,info.conjugaison.PART_ALL)}
                            </div>
                        </div>
                    </div>
                    {/* Infinitif */}
                    {this.renderModeBox(conjMode.infinitif)}
                    <div className='row'>
                    {this.renderConjugaisonBox(conjTemps.INF_P,info.conjugaison.INF_P)}
                    {this.renderConjugaisonBox(conjTemps.INF_PP,info.conjugaison.INF_PP)}
                    {this.renderConjugaisonBox(conjTemps.AUCUN,"&nbsp;")}
                    {this.renderConjugaisonBox(conjTemps.AUCUN,"&nbsp;")}
                    </div>          
                    {/* Règle */}
                    {this.renderModeBox(conjMode.regle)}
                    <div className='row'>
                        <p className='ConjBox'>
                            {info.regle}
                        </p>
                    </div>         
                    {/* emploi */}
                    {this.renderModeBox(conjMode.emploi)}
                    <div className='row'>
                        <p className='ConjBox'>
                            {info.conjugaison.caracteristique}
                        </p>
                    </div>          
                    {/* Impératif & participe */}
                    <div className='row'>
                        <div className='col-6'>
                            {this.renderModeBox(conjMode.tournure)}
                            <div className='row'>
                                {this.renderConjugaisonSmallBox(conjTemps.FUTUR_PROCHE,info.conjugaison.FUTUR_PROCHE)}
                                {this.renderConjugaisonSmallBox(conjTemps.PASSE_PROCHE,info.conjugaison.PASSE_PROCHE)}
                            </div>
                        </div>
                        <div className='col-6'>
                            {this.renderModeBox(conjMode.gerondif)}
                            <div className='row'>
                                {this.renderConjugaisonSmallBox(conjTemps.GER_P,info.conjugaison.GER_P)}
                                {this.renderConjugaisonSmallBox(conjTemps.GER_PP,info.conjugaison.GER_PP)}
                            </div>
                        </div>
                    </div>

                </div>                  
                </React.StrictMode>
            );
        } else {
            return (
                <div className='alert alert-success'>
                    {Parser(conjText.aideText)}
                </div>
            );
        }
    }
  }

export default ConjugaisonVerbe;  


