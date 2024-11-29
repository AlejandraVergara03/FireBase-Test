"use client";
import { db } from "../../../googleinit";
import { doc, getDoc } from "firebase/firestore";
//aqui se esta leyendo información que esta en firebase
export default function testFireBase() {
    
  
    const testConnection = async () => {
      try {
        //"testCollection", "testDocument" cambiarlos por los nombres de sus documentos y sus coleciones
        const testDocRef = doc(db, "testCollection", "testDocument");
        const docSnap = await getDoc(testDocRef);
  
        if (docSnap.exists()) {
          console.log("Conexión exitosa:", docSnap.data());
        } else {
          console.log("Documento no encontrado.");
        }
      } catch (error) {
        console.error("Error al conectar con Firebase:", error);
      }
    
  };
    
  
    return (
      <div>
  

        <button onClick={fetchQuestion}>Probar conexión</button>
  
      </div>
    );
  }