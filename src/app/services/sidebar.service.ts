import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sidebarVisible = signal<boolean>(true);
  sidebarUnfoldable = signal<boolean>(false);
  
  toggleSidebar(): void {
    this.sidebarVisible.update(v => !v);
  }
  
  setSidebarVisible(visible: boolean): void {
    this.sidebarVisible.set(visible);
  }
  
  toggleUnfoldable(): void {
    this.sidebarUnfoldable.update(v => !v);
  }
  
  setUnfoldable(unfoldable: boolean): void {
    this.sidebarUnfoldable.set(unfoldable);
  }
}
