<template>
  <footer>
    <div class='div1'>
      <router-link to='/'><i class='fa-brands fa-facebook'></i>{{ merkNaam }}</router-link>
      <router-link to='/'><i class='fa-brands fa-instagram'></i>{{ merkNaam }}</router-link>
      <router-link to='/'><i class='fa-solid fa-square-envelope'></i>{{ merkNaamMail }}</router-link>
    </div>
    <div class='div2'>
      <p>{{ contactGegevens }}</p>
      <ul>
        <li>{{ telNummer }}</li>
        <li>{{ adress }}</li>
        <li>{{ huisNr }}</li>
        <li>{{ postCode }}</li>
      </ul>
    </div>
    <div class='div3'>
      <p class='openingsuren'>{{ openingsUur }}</p>
      <ul>
        <li>{{ weekdagen[0] }}</li>
        <li>{{ weekdagen[1] }}</li>
        <li>{{ weekdagen[2] }}</li>
        <li>{{ weekdagen[3] }}</li>
        <li>{{ weekdagen[4] }}</li>
        <li>{{ weekdagen[5] }}</li>
        <li>{{ weekdagen[6] }}</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',

  data() {
    return {
      weekdagen: ['Zondag: Gesloten', 'Maandag: 10:30u tot 15:30u', 'Dinsdag: 10:30u tot 15:30u', 'Woensdag: 10:30u tot 15:30u', 'Donderdag: 10:30u tot 15:30u', 'Vrijdag: 10:30u tot 15:30u', 'Zaterdag: 8:30u tot 16:30u']
    }
  },

  computed: {
    merkNaam() {
      return 'Strings Of Fire'
    },
    merkNaamMail() {
      return 'StringsOfFire@hotmail.com'
    },
    contactGegevens() {
      return 'Contact gegevens:'
    },
    telNummer() {
      return 'Telefoonnummer: 0488571245'
    },
    adress() {
      return 'Adress: Dennenstraat'
    },
    huisNr() {
      return 'Nummer: 46'
    },
    postCode() {
      return 'Postcode: 2050'
    },
    openingsUur() {
      return 'Openings uren:'
    }
  }
}
</script>

<style scoped>

</style>