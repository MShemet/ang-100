import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example content 2',
      isExpanded: false,
    },
  ];

  public progressValue = 25;
}
