import React from 'react';
import ReactDOM from 'react-dom/client';
import Parser from 'html-react-parser'
import './VerbeInput.css'
import {getTemps, IND_P, IND_PC, IND_I, IND_PQP, IND_FS, IND_FA, IND_PS, IND_PA, DETAIL_TEMPS} from './ConjConstante.js'
import {AUCUN, SUBJ_P,SUBJ_PC,SUBJ_I,SUBJ_PQP,COND_P,COND_P2,COND_PC,IMP_P,IMP_PC,INF_P,INF_PP,PART_PR,PART_ALL}  from './ConjConstante.js'
import {MODE_INDICATIF,MODE_SUBJONCTIF,MODE_CONDITIONNEL,MODE_IMPERATIF,MODE_PARTICIPE,MODE_INFINITIF,DETAIL_MODE} from './ConjConstante.js'

/* same function as in php */
function stripTags (input, allowed) {

  allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
      commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
}

/* Class to control the input of a verb */
class VerbeInput extends React.Component {
    verbeConjugaison = ReactDOM.createRoot(document.getElementById('verbeConjug'));

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
        console.log("handleChange "+ event.target.value);
      }
    
      handleSubmit(event) {
        //ending managing the event
        event.preventDefault();
        const vb = this.state.value;
        this.loadVerbe(vb);        
      }

      handleClick(e,vb) {
        e.preventDefault();
        console.log('this is:'+vb, this);
        this.loadVerbe(vb);
      };   

      /* start to load a new verb and update the screen */
      loadVerbe(vb) {
        if (vb==="") return;
        this.setState({
            loading: true
        }, () => {
            const urlVb='https://leconjugueur.lefigaro.fr/php5/api.php?v='+vb
            fetch(urlVb)
            .then(results => results.json())
            .then(info => {
                this.setState(info);
                /* check if verbe exists */
                if (info.caracteristique.existe) {
                  this.updateConjugueVerbe(info);
                } else {
                  this.displayPropose(info);
                }
              })
            .catch(console.log);                
        });
      }

      componentDidMount(){
        this.inputVerbe.focus();
      }  
     

      /* display verb proposal */
      displayPropose(info) {
        this.verbeConjugaison.render( 
          <React.StrictMode>
            <div className='alert alert-warning' role='alert'>
              <h3>Le verbe {info.parametre.originalVerbe} n'a pas été trouvé.</h3>
              <p>Voici une proposition de verbes :</p>
              <ul>
                <li><button className='bg-alert-warning' onClick={(e)=>this.handleClick(e,'aimer')}>aimer</button></li>
                <li><button onClick={(e)=>this.handleClick(e,'regarder')}>regarder</button></li>
              </ul>
            </div>
          </React.StrictMode>
        );
      }

      /* display temps + conjugaison */
      renderConjugaisonBox(temps,conjugaison) {
        return <ConjugaisonBox temps={temps} conjugaison={conjugaison} />
      }
      renderModeBox(mode) {
        return <ModeBox mode={mode} />
      }

      /* mise à jour de la conjugaison du verbe */
      updateConjugueVerbe(info) {
        this.verbeConjugaison.render(
          <React.StrictMode>
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
          </React.StrictMode>
        );
      }
      
      /* display text input bar for conjugaison */
      render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-duotone fa-magnifying-glass fa-2x"></i>
                </span>              
                <input ref={(input) => { this.inputVerbe = input; }} 
                  autoFocus 
                  name='inputVerbe' 
                  className="conjug" 
                  type="text"
                  placeholder="Verbe à conjuguer" 
                  value={this.state.value} 
                  onChange={this.handleChange} />
                  <input className='btn btn-outline-secondary' type="submit" value="Conjuguer" />
                </div>
            </label>
          </form>
        );
      }
}

/* update the conjugaison with the tense box */
class ConjugaisonBox extends React.Component {
  render() {
    return (
      <div className='col-md-3 col-sm-6'>
        <h5>{this.props.temps}</h5>
        <p>{Parser(stripTags(this.props.conjugaison,'<b></b><br>'))}</p>
      </div>
    );
  }
}
/* display a mode */
class ModeBox extends React.Component {
  render() {
    return (
      <h2 className='bg-primary text-white p-2'>{this.props.mode}</h2>
    );
  }
}






export default VerbeInput;