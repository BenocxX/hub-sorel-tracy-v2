import PlanificationDesign from './planification-design.svx';
import StructureEtEspacement from './structure-et-espacement.svx';
import ImportanceHierarchie from './importance-hierarchie.svx';

export function makeConceptionInterfacesPresentationComponents() {
  return [
    { id: 'conception-interfaces-a2026-planification-design', component: PlanificationDesign },
    { id: 'conception-interfaces-a2026-structure-et-espacement', component: StructureEtEspacement },
    { id: 'conception-interfaces-a2026-importance-hierarchie', component: ImportanceHierarchie },
  ];
}
