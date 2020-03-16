<li>
                    <a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a>
                    <div class="nav-son menu2" id="slide{dede:field.typeid/}">
                        {dede:channel type='son' noself='yes'}
                        <p><a href="[field:typelink/]">[field:typename/]</a> <span> <img src="/images/zhnext.png" alt=""> <img src="/images/zhnext2.png" class="hidden" alt=""> </span></p>
                        {/dede:channel}
                    </div>
                </li>