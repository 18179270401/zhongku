<li>
                    <a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a>
                    <div class="nav-son menu2" id="slide{dede:field.typeid/}">
                        {dede:channel type='son' noself='yes'}
                        <p><a href="[field:typelink/]">[field:typename/]</a> <span> > </span></p>
                        {/dede:channel}
                    </div>
                </li>