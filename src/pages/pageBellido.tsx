import BellidoButton from "../components/bellido/BellidoButton";
import Logo from "../components/bellido/logo";

const PageBellido = () => {
    return <div><h1>Carlo Bellido </h1>
    <Logo/>
    <p>QEsercizio 3 : Ho fatto tutte le modifiche su master, poi un merge di master nel branch in Bellido-init, poi hard reset in master tornando alla situazione prima delle modifiche</p>

    <p>Quesito Esercizio 4 :Se la mia   branch dedicata è indietro di alcuni commit rispetto al branch "master" e voglio  portare le modifiche fatte su "master" sulla mia branch dedicata,
       posso utilizzare il comando git merge o git rebase, a seconda di come desidero unire le modifiche</p>
    
    {/* Esercizio 5 */}
    <p>
      Alghe wakame 
    </p>
    <p>
      Spaghetti di soia con pollo e verdure
    </p>

    <p>
      Zuppa di anatra
    </p>

    <p>
      Gelato al sesamo nero 
    </p>
    
    <p>Soluzione quesito 5 : Ho usato il commando git rebase -i Codice commit e nell'editor ho cambiato alcune cose , inviece che pick ho messo squash nelle commit che volevo unire </p>
    
    {/* Esercizio 6 */}
  
    <p> Lil uzi Vert </p>
    <p>Adam Driver</p>
    <p>Kaoru Mitoma</p>
    <p>Quesito esercizio 6 : Ho Fatto un reset current  branch to this commit con l'estensione Git Graph  , mi unisce tutte le modifiche e le commito in una sola commit </p>
    
    
    {/* Esercizio 7 */}

    <p> Quesito 7 , Posso correggerlo con i commando git commit –-amend</p>

   
       {/* Esercizio 8 */}

      <BellidoButton/>

      <p>Quesito 8 : Per Splittare in 2 le commit , ho eliminato la commit precedente con "git reset HEAD~" e poi ho aggiunto con git add e commitato  le operazioni separatamente   
</p>

       {/* Esercizio 9 */}

      <p> Quesito 9 : Si può fare un reset hard per tornare indietro in una branch </p>

    </div>;

    

  };
  
  export default PageBellido;
  