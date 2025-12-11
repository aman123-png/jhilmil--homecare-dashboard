const PATIENT_KEY = "jhilmil_patients";

export function getPatients() {
  return JSON.parse(localStorage.getItem(PATIENT_KEY) || "[]");
}

export function savePatient(patient) {
  const all = getPatients();
  all.push(patient);
  localStorage.setItem(PATIENT_KEY, JSON.stringify(all));
}

export function updatePatients(list) {
  localStorage.setItem(PATIENT_KEY, JSON.stringify(list));
}

export function updatePatientById(id, newData) {
  const all = getPatients();
  const updated = all.map(p => (p.id === id ? { ...p, ...newData } : p));
  updatePatients(updated);
  return updated;
}

export function deletePatientById(id) {
  const all = getPatients();
  const filtered = all.filter(p => p.id !== id);
  updatePatients(filtered);
  return filtered;
}
