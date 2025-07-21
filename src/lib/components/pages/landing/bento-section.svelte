<script lang="ts">
  import Conference from '$lib/assets/images/landing/conference.png';
  import Enseignants from '$lib/assets/images/landing/enseignants.jpg';
  import EspritFamille from '$lib/assets/images/landing/esprit-famille.png';
  import EtudiantsHackthon from '$lib/assets/images/landing/etudiants-hackthon.png';
  import EtudiantsSalleServeur from '$lib/assets/images/landing/etudiants-salle-serveur.png';
  import * as BentoGrid from '$lib/components/custom-ui/bento-grid';
</script>

<div class="bg-white">
  <div class="container mx-auto px-6 lg:px-8">
    <h2 class="text-base/7 font-semibold text-primary">On a hâte de te voir!</h2>
    <p
      class="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
    >
      La technique <em>info</em> c'est quoi?
    </p>
    <BentoGrid.Root class="mt-10 sm:mt-16">
      <BentoGrid.Item class="lg:col-span-3" edge="topLeft">
        <BentoGrid.Image
          class="object-top"
          src={Enseignants}
          alt="Les enseignants de la technique de l'informatique"
          title="Photo prise par NathB"
        />
        <BentoGrid.Content>
          <BentoGrid.SubTitle>Passion</BentoGrid.SubTitle>
          <BentoGrid.Title>Des profs dynamiques et dévoués!</BentoGrid.Title>
          <BentoGrid.Description>
            Apprendre de ces profs, c'est bénéficier d'un enseignement de qualité qui vous incitera
            à passer à l'action pour développer vos projets logiciels. Ils sont là pour vous aider à
            réussir et à vous dépasser, quel que soit votre niveau ou votre projet.
          </BentoGrid.Description>
        </BentoGrid.Content>
      </BentoGrid.Item>
      <BentoGrid.Item class="lg:col-span-3" edge="topRight">
        <BentoGrid.Image
          class="lg:object-right"
          src={EtudiantsSalleServeur}
          alt="Étudiants de première année dans une salle des serveurs"
        />
        <BentoGrid.Content>
          <BentoGrid.SubTitle>Ambition</BentoGrid.SubTitle>
          <BentoGrid.Title><em>Vers l'infini et au-delà!</em> 🚀</BentoGrid.Title>
          <BentoGrid.Description>
            À chaque session, vous mettrez en pratique vos apprentissages dans des projets qui vous
            passionnent, que ce soit lors de compétitions intensives, dans vos cours ou au sein du
            Parcours « Startup ». Nous offrons un environnement propice à l'apprentissage et à la
            collaboration.
          </BentoGrid.Description>
        </BentoGrid.Content>
      </BentoGrid.Item>
      <BentoGrid.Item class="lg:col-span-2" edge="bottomLeft">
        <BentoGrid.Image src={Conference} alt="Conférence dans l'auditorium" />
        <BentoGrid.Content>
          <BentoGrid.SubTitle>Connaissance</BentoGrid.SubTitle>
          <BentoGrid.Title>Apprendre des tonnes de trucs <em>cools</em></BentoGrid.Title>
          <BentoGrid.Description>
            De la programmation à la gestion de projet, en passant par la sécurité informatique,
            vous acquerrez une multitude de compétences précieuses pour votre vie professionnelle.
          </BentoGrid.Description>
        </BentoGrid.Content>
      </BentoGrid.Item>
      <BentoGrid.Item class="lg:col-span-2">
        <BentoGrid.Image
          src={EtudiantsHackthon}
          alt="Des étudiants en train de travailler sur un projet de programmation lors d'un hackathon"
        />
        <BentoGrid.Content>
          <BentoGrid.SubTitle>Travaille en équipe</BentoGrid.SubTitle>
          <BentoGrid.Title><em>Un pour tous et tous pour un!</em></BentoGrid.Title>
          <BentoGrid.Description>
            Plusieurs fois par an, nous participons à des compétitions de programmation, une
            excellente occasion de mettre en pratique vos compétences et de vous dépasser en équipe
            !
          </BentoGrid.Description>
        </BentoGrid.Content>
      </BentoGrid.Item>
      <BentoGrid.Item class="lg:col-span-2" edge="bottomRight">
        <BentoGrid.Image src={EspritFamille} alt="La cohorte 2024 à Stratea" />
        <BentoGrid.Content>
          <BentoGrid.SubTitle>Famille</BentoGrid.SubTitle>
          <BentoGrid.Title>Sentiment d'appartenance</BentoGrid.Title>
          <BentoGrid.Description>
            La technique en informatique, c'est une grande famille. Vous y trouverez des amis, des
            mentors et des alliés pour vous aider à vous épanouir et à réussir.
          </BentoGrid.Description>
        </BentoGrid.Content>
      </BentoGrid.Item>
    </BentoGrid.Root>
  </div>
</div>
