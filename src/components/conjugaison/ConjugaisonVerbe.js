import React from 'react';
import ConjugaisonBox from './ConjugaisonBox';
import ModeBox from './ModeBox';

import {getTemps, IND_P, IND_PC, IND_I, IND_PQP, IND_FS, IND_FA, IND_PS, IND_PA, DETAIL_TEMPS} from '../../features/ConjConstante.js'
import {AUCUN, SUBJ_P,SUBJ_PC,SUBJ_I,SUBJ_PQP,COND_P,COND_P2,COND_PC,IMP_P,IMP_PC,INF_P,INF_PP,PART_PR,PART_ALL}  from '../../features/ConjConstante.js'
import {MODE_INDICATIF,MODE_SUBJONCTIF,MODE_CONDITIONNEL,MODE_IMPERATIF,MODE_PARTICIPE,MODE_INFINITIF,DETAIL_MODE} from '../../features/ConjConstante.js'

/* display conjugaison */
class ConjugaisonVerbe extends React.Component {

    /* display temps + conjugaison */
    renderConjugaisonBox(temps,conjugaison) {
        return <ConjugaisonBox temps={temps} conjugaison={conjugaison} />
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
                    <h1 className='text-center bg-primary text-white py-3'>Conjugaison du verbe {info.verbe}</h1>
                    {/* Indicatif */}
                    {this.renderModeBox(getTemps(MODE_INDICATIF,DETAIL_MODE),info.conjugaison.IND_P)}
                    <div className='row'>
                    {this.renderConjugaisonBox(getTemps(IND_P,DETAIL_TEMPS),info.conjugaison.IND_P)}
                    {this.renderConjugaisonBox(getTemps(IND_PC,DETAIL_TEMPS),info.conjugaison.IND_PC)}
                    {this.renderConjugaisonBox(getTemps(IND_I,DETAIL_TEMPS),info.conjugaison.IND_I)}
                    {this.renderConjugaisonBox(getTemps(IND_PQP,DETAIL_TEMPS),info.conjugaison.IND_PQP)}
                    </div>
                    <div className='row'>
                    {this.renderConjugaisonBox(getTemps(IND_PS,DETAIL_TEMPS),info.conjugaison.IND_PS)}
                    {this.renderConjugaisonBox(getTemps(IND_PA,DETAIL_TEMPS),info.conjugaison.IND_PA)}
                    {this.renderConjugaisonBox(getTemps(IND_FS,DETAIL_TEMPS),info.conjugaison.IND_FS)}
                    {this.renderConjugaisonBox(getTemps(IND_FA,DETAIL_TEMPS),info.conjugaison.IND_FA)}
                    </div>

                    {/* Subjonctif */}
                    {this.renderModeBox(getTemps(MODE_SUBJONCTIF,DETAIL_MODE),info.conjugaison.IND_P)}
                    <div className='row'>
                    {this.renderConjugaisonBox(getTemps(SUBJ_P,DETAIL_TEMPS),info.conjugaison.SUBJ_P)}
                    {this.renderConjugaisonBox(getTemps(SUBJ_PC,DETAIL_TEMPS),info.conjugaison.SUBJ_PC)}
                    {this.renderConjugaisonBox(getTemps(SUBJ_I,DETAIL_TEMPS),info.conjugaison.SUBJ_I)}
                    {this.renderConjugaisonBox(getTemps(SUBJ_PQP,DETAIL_TEMPS),info.conjugaison.SUBJ_PQP)}
                    </div>   
                    {/* Conditionnel */}
                    {this.renderModeBox(getTemps(MODE_CONDITIONNEL,DETAIL_MODE),info.conjugaison.IND_P)}
                    <div className='row'>
                    {this.renderConjugaisonBox(getTemps(COND_P,DETAIL_TEMPS),info.conjugaison.COND_P)}
                    {this.renderConjugaisonBox(getTemps(COND_PC,DETAIL_TEMPS),info.conjugaison.COND_PC)}
                    {this.renderConjugaisonBox(getTemps(COND_P2,DETAIL_TEMPS),info.conjugaison.COND_P2)}
                    {this.renderConjugaisonBox(getTemps(AUCUN,DETAIL_TEMPS),"&nbsp;")}
                    </div>      
                    {/* Impératif & participe */}
                    <div className='row'>
                    <div className='col-6'>
                        {this.renderModeBox(getTemps(MODE_IMPERATIF,DETAIL_MODE),info.conjugaison.IND_P)}
                    </div>
                    <div className='col-6'>
                        {this.renderModeBox(getTemps(MODE_PARTICIPE,DETAIL_MODE),info.conjugaison.IND_P)}
                    </div>
                    </div>
                    <div className='row'>
                    {this.renderConjugaisonBox(getTemps(IMP_P,DETAIL_TEMPS),info.conjugaison.IMP_P)}
                    {this.renderConjugaisonBox(getTemps(IMP_PC,DETAIL_TEMPS),info.conjugaison.IMP_PC)}
                    {this.renderConjugaisonBox(getTemps(PART_PR,DETAIL_TEMPS),info.conjugaison.PART_PR)}
                    {this.renderConjugaisonBox(getTemps(PART_ALL,DETAIL_TEMPS),info.conjugaison.PART_ALL)}
                    </div>                                                                                                
                    {/* Infinitif */}
                    {this.renderModeBox(getTemps(MODE_INFINITIF,DETAIL_MODE),info.conjugaison.IND_P)}
                    <div className='row'>
                    {this.renderConjugaisonBox(getTemps(INF_P,DETAIL_TEMPS),info.conjugaison.INF_P)}
                    {this.renderConjugaisonBox(getTemps(INF_PP,DETAIL_TEMPS),info.conjugaison.INF_PP)}
                    {this.renderConjugaisonBox(getTemps(AUCUN,DETAIL_TEMPS),"&nbsp;")}
                    {this.renderConjugaisonBox(getTemps(AUCUN,DETAIL_TEMPS),"&nbsp;")}
                    </div>          
                </div>                  
                </React.StrictMode>
            );
        } else {
            return (
                <p>Aucun verbe conjugué</p>
            );
        }
    }
  }

export default ConjugaisonVerbe;  


