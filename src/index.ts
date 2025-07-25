import { Terminal } from './Terminal';
import type { TerminalOptions, CommandMap, Command } from './types';
import './styles.css';

/**
 * Erstellt und initialisiert ein neues interaktives CV-Terminal.
 * @param mountPointId - Die ID des HTML-Elements, an das das Terminal angehängt werden soll.
 * @param options - Ein optionales Objekt für Konfigurationen.
 * @returns Eine Instanz der Terminal-Klasse.
 */
export function createInteractiveCV(
    mountPointId: string,
    options: {
      customCommands?: CommandMap,
      welcomeMessage?: string,
      width?: string,
      height?: string
    } = {}
): Terminal {
  const mountPoint = document.getElementById(mountPointId);
  if (!mountPoint) {
    throw new Error(`[InteractiveCV] Mount-Point mit der ID "${mountPointId}" wurde nicht gefunden.`);
  }

  const terminalOptions: TerminalOptions = {
    mountPoint,
    ...options,
    prompt: '>',
  };

  return new Terminal(terminalOptions);
}

export { Terminal };
export type { Command, CommandMap, TerminalOptions };