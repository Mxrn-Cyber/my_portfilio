<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ExampleTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     */
    public function testBasicExample(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('http://127.0.0.1:8001/register')
            ->clickLink('Register')
            ->type('name', 'Samson')
            ->type('email', 'samson@test.com')
            ->type('password', '00000000')
            ->type('password_confirmation', '00000000')
            ->click('button[type="submit"]')
            ->pause(10000)
            ->press('Samson');
            if ($browser->seeLink('Log Out')) {
                $browser->clickLink('Log Out')
                ->clickLink('Login')
                ->type('email', 'samson@test.com')
                ->type('password', '00000000')
                ->click('button[type="submit"]');
            }
        });
    }
}
