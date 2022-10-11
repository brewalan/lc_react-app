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
      }
    
      handleSubmit(event) {
        const vb = this.state.value;


            this.setState({
                loading: true
            }, () => {
                const urlVb='https://leconjugueur.lefigaro.fr/php5/api.php?v='+vb
                fetch(urlVb)
                .then(results => results.json())
                .then(info => {
                    /*const results = info.data.map(x => {
                      return {
                        caracteritique: x.caracteristiques,
                        verbe: x.verbe,
                        conjugaison: x.conjugaison,
                        parametre: x.parametre,
                        similaire: x.similaire
                      }
                    })*/
                    this.setState(info);
                    this.verbeConjugaison.render(
                      <React.StrictMode>
                        <div className='container'>
                          {/* Indicatif */}
                          <h2 className='bg-primary text-white p-2'>{getTemps(MODE_INDICATIF,DETAIL_MODE)}</h2>
                          <div className='row'>
                            <div className='col'>
                              <h4>{getTemps(IND_P,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.IND_P,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(IND_PC,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.IND_PC,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(IND_I,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.IND_I,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(IND_PQP,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.IND_PQP,'<b></b><br>'))}</p>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col'>
                              <h4>{getTemps(IND_PS,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.IND_PS,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(IND_PA,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.IND_PA,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(IND_FS,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.IND_FS,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(IND_FA,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.IND_FA,'<b></b><br>'))}</p>
                            </div>
                          </div>  
                          {/* Subjonctif */}
                          <h2 className='bg-primary text-white p-2'>{getTemps(MODE_SUBJONCTIF,DETAIL_MODE)}</h2>
                          <div className='row'>
                            <div className='col'>
                              <h4>{getTemps(SUBJ_P,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.SUBJ_P,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(SUBJ_PC,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.SUBJ_PC,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(SUBJ_I,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.SUBJ_I,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(SUBJ_PQP,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.SUBJ_PQP,'<b></b><br>'))}</p>
                            </div>
                          </div>   
                          {/* Conditionnel */}
                          <h2 className='bg-primary text-white p-2'>{getTemps(MODE_CONDITIONNEL,DETAIL_MODE)}</h2>
                          <div className='row'>
                            <div className='col'>
                              <h4>{getTemps(COND_P,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.COND_P,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(COND_PC,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.COND_PC,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(COND_P2,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.COND_P2,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(AUCUN,DETAIL_TEMPS)}</h4>
                              <p>&nbsp;</p>
                            </div>
                          </div>      
                          {/* Impératif & participe */}
                          <div className='row'>
                            <div className='col-6'>
                              <h2 className='bg-primary text-white p-2'>{getTemps(MODE_IMPERATIF,DETAIL_MODE)}</h2>
                            </div>
                            <div className='col-6'>
                              <h2 className='bg-primary text-white p-2'>{getTemps(MODE_PARTICIPE,DETAIL_MODE)}</h2>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col'>
                              <h4>{getTemps(IMP_P,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.IMP_P,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(IMP_PC,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.IMP_PC,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(PART_PR,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.PART_PR,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(PART_ALL,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.PART_ALL,'<b></b><br>'))}</p>
                            </div>
                          </div>                                                                                                
                          {/* Infinitif */}
                          <h2 className='bg-primary text-white p-2'>{getTemps(MODE_INFINITIF,DETAIL_MODE)}</h2>
                          <div className='row'>
                            <div className='col'>
                              <h4>{getTemps(INF_P,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.INF_P,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(INF_PP,DETAIL_TEMPS)}</h4>
                              <p>{Parser(stripTags(info.conjugaison.INF_PP,'<b></b><br>'))}</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(AUCUN,DETAIL_TEMPS)}</h4>
                              <p>&nbsp;</p>
                            </div>
                            <div className='col'>
                              <h4>{getTemps(AUCUN,DETAIL_TEMPS)}</h4>
                              <p>&nbsp;</p>
                            </div>
                          </div>                            
                        </div>
                      </React.StrictMode>
                    );

                  })
                //.then(console.log(this.state.verbe))
                  .catch(console.log);  
                
            });


     /*   fetch.getJSON('https://leconjugueur.lefigaro.fr/php5/api.php?v='+vb)
        .then(({ results }) => console.log(JSON.stringify(results)));*/
        //this.setState({ person: results }));


        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      componentDidMount(){
        this.inputVerbe.focus();
      }      
        
      render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                <i className="fa-duotone fa-magnifying-glass fa-2x"></i>
                <input ref={(input) => { this.inputVerbe = input; }} 
                  autoFocus 
                  name='inputVerbe' 
                  className="conjug" 
                  type="text" 
                  value={this.state.value} 
                  onChange={this.handleChange} />
            </label>
            <input type="submit" value="Conjuguer" />
          </form>
        );
      }
}


export default VerbeInput;