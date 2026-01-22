import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export function AccordionDemo() {
  return (
    <Accordion
      className="w-full mt-8"
      defaultValue={["item-1"]}
    >
      <AccordionItem value="item-1" >
        <AccordionTrigger className="hover:cursor-pointer hover:bg-accent px-4">Product Information</AccordionTrigger>
          <AccordionContent className="px-4 pt-2 flex flex-col gap-4 text-balance">
            <p>
              <strong>Lock-In: Effortless NFC Smart Lock</strong>
              <br />
              Lock-In transforms your phone into a seamless key—tap to lock or unlock your door with NFC. No apps, no WiFi, no subscriptions required.
            </p>
            
            <p>
              <strong>Key Features</strong>
            </p>
            
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Physical Control: Simple tap-to-lock/unlock without settings or apps.</li>
              <li>Universal Compatibility: Works with any iOS or Android phone with NFC.</li>
              <li>Instant Response: Locks in milliseconds—no buttons or delays.</li>
              <li>Privacy Focused: All data stays on-device; no cloud or tracking.</li>
            </ul>
            
            <p>
              Perfect for modern homes seeking simplicity and security. Pre-order now and reclaim your door.
            </p>
          </AccordionContent>


      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:cursor-pointer hover:bg-accent px-4">Shipping Details</AccordionTrigger>
        <AccordionContent className="px-4 pt-2 flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3 to 5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" >
        <AccordionTrigger className="hover:cursor-pointer hover:bg-accent px-4"> Return Policy</AccordionTrigger>
        <AccordionContent className="px-4 pt-2 flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
