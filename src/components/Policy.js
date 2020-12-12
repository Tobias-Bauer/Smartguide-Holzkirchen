import React from 'react';
import './Policy.scss'

var green = {backgroundColor: "#A0C510", color: "white"}
export default class Policy extends React.Component{
  constructor(props){
    super(props);
    if(this.props.match.params.language === "en"){
        this.state = {style1: {}, style2: green, language: "en", impressum: true, style3: green, style4: {}}
    }else{
        this.state = {style1: green, style2: {}, language: "de", impressum: true, style3: green, style4: {}}
    }
}
render() {
  return (
    <div className="policy">
          <div className="buttonContainer">
            <div className="languageButton">
              {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style1: green, style2: {}, language: "de"})} style={this.state.style1 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>DE</p>:
              <p onClick={() => this.setState({style1: green, style2: {}, language: "de"})} style={this.state.style1}>DE</p>}
              {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style1: {}, style2: green, language: "en"})} style={this.state.style2 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>EN</p>:
              <p onClick={() => this.setState({style1: {}, style2: green, language: "en"})} style={this.state.style2}>EN</p>}
            </div>
            {this.state.style1 === green?
            <div className="policyButton">
              {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style3: green, style4: {}, impressum: true})} style={this.state.style3 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>Impressum</p>:
              <p onClick={() => this.setState({style3: green, style4: {}, impressum: true})} style={this.state.style3}>Impressum</p>}
              {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style3: {}, style4: green, impressum: false})} style={this.state.style4 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>Datenschutzerklärung</p>:
              <p onClick={() => this.setState({style3: {}, style4: green, impressum: false})} style={this.state.style4}>Datenschutzerklärung</p>}
            </div>:
            <div className="policyButton">
              {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style3: green, style4: {}, impressum: true})} style={this.state.style3 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>Legal Notice</p>:
              <p onClick={() => this.setState({style3: green, style4: {}, impressum: true})} style={this.state.style3}>Legal Notice</p>}
              {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style3: {}, style4: green, impressum: false})} style={this.state.style4 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>Privacy Policy</p>:
              <p onClick={() => this.setState({style3: {}, style4: green, impressum: false})} style={this.state.style4}>Privacy Policy</p>}
            </div>}
          </div>
          {!this.state.impressum&&!(this.state.style1 === green)?
          <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <h1>Privacy Policy</h1> <p>
              Staatliches Gymnasium Holzkirchen built the Smartguide Holzkirchen app as
              an Open Source app. This SERVICE is provided by
              Staatliches Gymnasium Holzkirchen at no cost and is intended for use as
              is.
            </p> <p>
              This page is used to inform visitors regarding our
              policies with the collection, use, and disclosure of Personal
              Information if anyone decided to use our Service.
            </p> <p>
              If you choose to use our Service, then you agree to
              the collection and use of information in relation to this
              policy. The Personal Information that we collect is
              used for providing and improving the Service. We will not use or share your information with
              anyone except as described in this Privacy Policy.
            </p> <p><strong>Information Collection and Use</strong></p> <p>
              For a better experience, while using our Service, we
              may require you to provide us with certain personally
              identifiable information. The information that
              we request will be retained by us and used as described in this privacy policy.
            </p> <div><p>
                The app does use third party services that may collect
                information used to identify you.
              </p> <p>
                Link to privacy policy of third party service providers used
                by the app
              </p>
              <ul>
                <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
                <li><a href="https://www.mapbox.com/legal/privacy" target="_blank" rel="noopener noreferrer">Mapbox</a></li>
                <li><a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase-Hosting</a></li>
              </ul>
            </div>
            <p><strong>Log Data</strong></p> <p>
              We want to inform you that whenever you
              use our Service, in a case of an error in the app
              we collect data and information (through third party
              products) on your phone called Log Data. This Log Data may
              include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing our Service,
              the time and date of your use of the Service, and other
              statistics.
            </p> <p><strong>Cookies</strong></p> <p>
              Cookies are files with a small amount of data that are
              commonly used as anonymous unique identifiers. These are sent
              to your browser from the websites that you visit and are
              stored on your device's internal memory.
            </p> <p>
              This Service does not use these “cookies” explicitly. However,
              the app may use third party code and libraries that use
              “cookies” to collect information and improve their services.
              You have the option to either accept or refuse these cookies
              and know when a cookie is being sent to your device. If you
              choose to refuse our cookies, you may not be able to use some
              portions of this Service.
            </p> <p><strong>Service Providers</strong></p> <p>
              We may employ third-party companies and
              individuals due to the following reasons:
            </p> <ul><li>To facilitate our Service;</li> <li>To provide the Service on our behalf;</li> <li>To perform Service-related services; or</li> <li>To assist us in analyzing how our Service is used.</li></ul> <p>
              We want to inform users of this Service
              that these third parties have access to your Personal
              Information. The reason is to perform the tasks assigned to
              them on our behalf. However, they are obligated not to
              disclose or use the information for any other purpose.
            </p> <p><strong>Security</strong></p> <p>
              We value your trust in providing us your
              Personal Information, thus we are striving to use commercially
              acceptable means of protecting it. But remember that no method
              of transmission over the internet, or method of electronic
              storage is 100% secure and reliable, and we cannot
              guarantee its absolute security.
            </p> <p><strong>Links to Other Sites</strong></p> <p>
              This Service may contain links to other sites. If you click on
              a third-party link, you will be directed to that site. Note
              that these external sites are not operated by us.
              Therefore, we strongly advise you to review the
              Privacy Policy of these websites. We have
              no control over and assume no responsibility for the content,
              privacy policies, or practices of any third-party sites or
              services.
            </p> <p><strong>Children’s Privacy</strong></p> <p>
              These Services do not address anyone under the age of 13.
              We do not knowingly collect personally
              identifiable information from children under 13. In the case
              we discover that a child under 13 has provided
              us with personal information, we immediately
              delete this from our servers. If you are a parent or guardian
              and you are aware that your child has provided us with
              personal information, please contact us so that
              we will be able to do necessary actions.
            </p> <p><strong>Changes to This Privacy Policy</strong></p> <p>
              We may update our Privacy Policy from
              time to time. Thus, you are advised to review this page
              periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p> <p>This policy is effective as of 2020-12-08</p> <p><strong>Contact Us</strong></p> <p>
              If you have any questions or suggestions about our
              Privacy Policy, do not hesitate to contact us at smartguide-holzkirchen@protonmail.com.
            </p> <p>This privacy policy page was created at <a href="https://privacypolicytemplate.net" target="_blank" rel="noopener noreferrer">privacypolicytemplate.net </a>and modified/generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a></p>
          </div>:null}

          {!this.state.impressum&&this.state.style1 === green?
          <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <h1>Datenschutzerklärung</h1> 
            <p>Das Staatliche Gymnasium Holzkirchen hat die Smartguide Holzkirchen App als Open Source App entwickelt. Dieser SERVICE wird vom Staatlichen Gymnasium Holzkirchen kostenlos zur Verfügung gestellt und ist für die Nutzung ohne Einschränkung gedacht.</p>
            <p>Diese Seite dient dazu, Besucher über unsere Richtlinien bezüglich der Sammlung, Verwendung und Offenlegung von persönlichen Informationen zu informieren, falls sich jemand für die Nutzung unseres Dienstes entscheidet.</p>
            <p>Wenn Sie sich entscheiden, unseren Service zu nutzen, stimmen Sie der Sammlung und Nutzung von Informationen in Bezug auf diese Richtlinie zu. Die von uns gesammelten persönlichen Informationen werden für die Bereitstellung und Verbesserung des Dienstes verwendet. Wir werden Ihre Informationen nicht verwenden oder weitergeben, außer wie in dieser Datenschutzerklärung beschrieben.</p>
            <p><strong>Sammlung und Verwendung von Informationen</strong></p>
            <p>Um Ihnen die Nutzung unseres Dienstes zu erleichtern, bitten wir Sie unter Umständen, uns bestimmte personenbezogene Daten zur Verfügung zu stellen. Die von uns angeforderten Informationen werden von uns aufbewahrt und wie in dieser Datenschutzrichtlinie beschrieben verwendet.</p>
            <div>
              <p>Die App nutzt Dienste von Drittanbietern, die möglicherweise Informationen sammeln, mit denen Sie identifiziert werden können.</p>
              <p>Link zu den Datenschutzrichtlinien von Drittanbietern, die von der App verwendet werden</p>
              <ul>
                <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play-Dienste</a></li>
                <li><a href="https://www.mapbox.com/legal/privacy" target="_blank" rel="noopener noreferrer">Mapbox</a></li>
                <li><a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase-Hosting</a></li>
              </ul>
            </div>
            <p><strong>Log-Daten</strong></p>
            <p>Wir möchten Sie darüber informieren, dass wir bei der Nutzung unseres Dienstes im Falle eines Fehlers in der App Daten und Informationen (durch Produkte von Drittanbietern) auf Ihrem Telefon sammeln, die sogenannten Logdaten. Diese Logdaten können Informationen wie die Internetprotokoll-Adresse ("IP") Ihres Geräts, den Gerätenamen, die Version des Betriebssystems, die Konfiguration der App bei der Nutzung unseres Dienstes, die Uhrzeit und das Datum Ihrer Nutzung des Dienstes und andere Statistiken enthalten.</p>
             <p><strong>Cookies</strong></p>
             <p>Cookies sind Dateien mit einer kleinen Menge an Daten, die üblicherweise als anonyme eindeutige Identifikatoren verwendet werden. Diese werden von den Websites, die Sie besuchen, an Ihren Browser gesendet und im internen Speicher Ihres Geräts gespeichert.</p>
             <p>Dieser Dienst verwendet diese "Cookies" nicht explizit. Die App kann jedoch Code und Bibliotheken von Drittanbietern verwenden, die "Cookies" nutzen, um Informationen zu sammeln und ihre Dienste zu verbessern. Sie haben die Möglichkeit, diese Cookies entweder zu akzeptieren oder abzulehnen und zu wissen, wann ein Cookie an Ihr Gerät gesendet wird. Wenn Sie sich entscheiden, unsere Cookies abzulehnen, können Sie möglicherweise einige Teile dieses Dienstes nicht nutzen.</p>
             <p><strong>Dienstanbieter</strong></p>
             <p>Wir können aus den folgenden Gründen Drittunternehmen und Einzelpersonen einsetzen</p>
             <ul>
               <li>Um unseren Dienst zu ermöglichen;</li>
               <li>Zur Bereitstellung des Dienstes in unserem Namen;</li>
               <li>Um dienstbezogene Dienstleistungen zu erbringen; oder</li>
               <li>Um uns bei der Analyse der Nutzung unseres Dienstes zu unterstützen.</li>
              </ul>
              <p>Wir möchten die Nutzer dieses Dienstes darüber informieren, dass diese Dritten Zugriff auf Ihre persönlichen Daten haben. Der Grund dafür ist, dass sie die ihnen zugewiesenen Aufgaben in unserem Namen ausführen. Sie sind jedoch verpflichtet, die Informationen nicht für andere Zwecke weiterzugeben oder zu verwenden.</p>
              <p><strong>Sicherheit</strong></p>
              <p>Wir wissen Ihr Vertrauen zu schätzen, das Sie uns bei der Übermittlung Ihrer persönlichen Daten entgegenbringen, und bemühen uns daher, wirtschaftlich vertretbare Mittel zum Schutz dieser Daten einzusetzen. Denken Sie jedoch daran, dass keine Methode der Übertragung über das Internet oder der elektronischen Speicherung zu 100% sicher und zuverlässig ist, und wir können keine absolute Sicherheit garantieren.</p>
              <p><strong>Links zu anderen Seiten</strong></p>
              <p>Dieser Service kann Links zu anderen Sites enthalten. Wenn Sie auf einen Link eines Dritten klicken, werden Sie zu dieser Site weitergeleitet. Beachten Sie, dass diese externen Sites nicht von uns betrieben werden. Wir raten Ihnen daher dringend, die Datenschutzrichtlinien dieser Websites zu lesen. Wir haben keine Kontrolle über und übernehmen keine Verantwortung für den Inhalt, die Datenschutzrichtlinien oder die Praktiken von Websites oder Diensten Dritter.</p>
              <p><strong>Datenschutz für Kinder</strong></p>
              <p>Diese Dienste richten sich nicht an Personen unter 13 Jahren. Wir sammeln nicht wissentlich persönlich identifizierbare Informationen von Kindern unter 13 Jahren. Sollten wir feststellen, dass ein Kind unter 13 Jahren uns persönliche Daten zur Verfügung gestellt hat, löschen wir diese sofort von unseren Servern. Wenn Sie ein Elternteil oder ein Erziehungsberechtigter sind und Sie wissen, dass Ihr Kind uns persönliche Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte, damit wir die notwendigen Maßnahmen ergreifen können.</p>
              <p><strong>Änderungen an dieser Datenschutzrichtlinie</strong></p>
              <p>Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir empfehlen Ihnen daher, diese Seite regelmäßig auf Änderungen zu überprüfen. Wir werden Sie über alle Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen.</p>
              <p>Diese Richtlinie ist gültig ab dem 2020-12-08</p>
              <p><strong>Kontaktieren Sie uns</strong></p>
              <p>Wenn Sie Fragen oder Anregungen zu unserer Datenschutzrichtlinie haben, zögern Sie nicht, uns unter smartguide-holzkirchen@protonmail.com zu kontaktieren.</p>
              <p>Diese Seite mit Datenschutzrichtlinien wurde auf <a href="https://privacypolicytemplate.net" target="_blank" rel="noopener noreferrer">privacypolicytemplate.net </a>erstellt und von <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a> modifiziert/generiert.</p>
              <p>Übersetzt mit <a href="https://www.DeepL.com/Translator" target="_blank" rel="noopener noreferrer">www.DeepL.com/Translator </a>(kostenlose Version)</p>
          </div>:null}


          
          {this.state.impressum&&this.state.style1 === green?
          <div>
            <h1>Impressum</h1>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>Staatliches Gymnasium Holzkirchen<br />
              Jörg-Hube-Str. 4<br />
              83607 Holzkirchen</p>
            <p><strong>Vertreten durch:</strong><br />
              [Vor- und Nachnamen der vertretungsberechtigten Personen]</p>
            <h2>Kontakt</h2>
            <p>Telefon: [Telefonnummer]<br />
              E-Mail: Smartguide-holzkirchen@protonmail.com</p>
            <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            <h3>Haftung für Inhalte</h3> <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p> <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p> <h3>Haftung für Links</h3> <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p> <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p> <h3>Urheberrecht</h3> <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p> <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
          </div>:null}

          {this.state.impressum&&!(this.state.style1 === green)?
          <div>
            <h1>Legal Notice</h1>
            <h2>According to § 5 TMG</h2>
            <p>Staatliches Gymnasium Holzkirchen<br />
              Jörg-Hube-Str. 4<br />
              83607 Holzkirchen</p>
            <p><strong>Represented by:</strong><br />
            [First name and surname of authorized representatives]</p>
            <h2>Contact</h2>
            <p>Telephone: [telephone number]<br />
              Email: Smartguide-holzkirchen@protonmail.com</p>
            <h2>Consumer dispute settlement / universal arbitration board</h2>
            <p>We are neither willing nor obliged to take part in dispute settlement proceedings before a consumer arbitration board.</p>
            <h3>Liability for content</h3>
            <p>As a service provider, we are responsible for our own content on these pages in accordance with general law in accordance with Section 7 (1) of the German Telemedia Act. According to §§ 8 to 10 TMG, as a service provider, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
            <p>Obligations to remove or block the use of information under general law remain unaffected. Liability in this regard is only possible from the point in time at which we become aware of a specific legal violation. As soon as we become aware of such legal violations, we will remove this content immediately.</p>
            <h3>Liability for links</h3>
            <p>Our offer contains links to external third-party websites over whose content we have no influence. Therefore we cannot accept any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time they were linked. No illegal content was found at the time the link was created.</p>
            <p>Permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of legal violations, we will remove such links immediately.</p>
            <h3>Copyright</h3>
            <p>The content and works on these pages created by the website operator are subject to German copyright law. The reproduction, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this website are only permitted for private, non-commercial use.</p>
            <p>Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular contents of third parties are marked as such. Should you nevertheless become aware of a copyright infringement, we would ask you to notify us accordingly. As soon as we become aware of legal violations, we will remove such content immediately.</p>
            <p>Source: <a href="https://www.e-recht24.de">e-recht24.de (translated to English)</a></p>
          </div>:null}
    </div>
        );
  }
}